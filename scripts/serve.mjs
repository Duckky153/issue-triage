import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const staticRoot = process.env.STATIC_ROOT ? resolve(process.env.STATIC_ROOT) : null;
const root = staticRoot ?? resolve(process.env.APP_ROOT || projectRoot);
const basePath = staticRoot && process.env.BASE_PATH
  ? `/${process.env.BASE_PATH.replace(/^\/+|\/+$/g, "")}`
  : "";
const port = Number(process.env.PORT || 4191);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8" };

export const server = createServer(async (request, response) => {
  const requestPath = new URL(request.url, `http://${request.headers.host}`).pathname;
  if (basePath && requestPath !== basePath && requestPath !== `${basePath}/` && !requestPath.startsWith(`${basePath}/`)) {
    response.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
    return;
  }
  const pathname = basePath ? requestPath.slice(basePath.length) || "/" : requestPath;
  const decodedPath = decodeURIComponent(pathname).replace(/^\/+/, "");
  const relativePath = staticRoot
    ? (pathname === "/" || pathname === "/index.html" ? "index.html" : decodedPath)
    : pathname === "/" || pathname === "/index.html"
      ? "site/index.html"
      : pathname.startsWith("/deliverables/") || pathname.startsWith("/site/")
        ? decodedPath
        : `site/${decodedPath}`;
  const target = resolve(root, relativePath);
  if (target !== root && !target.startsWith(`${root}${sep}`)) { response.writeHead(403).end("Forbidden"); return; }
  try {
    const info = await stat(target);
    if (!info.isFile()) throw new Error("not-file");
    response.writeHead(200, { "Content-Type": types[extname(target)] || "application/octet-stream", "Cache-Control": "no-store" });
    createReadStream(target).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => console.log(`TRIAGE_DASHBOARD_READY http://127.0.0.1:${port}${basePath}/`));
