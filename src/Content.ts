import fs from "fs";
import http from "http";
import url from "url";
import Megoldás from "./Megoldás";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");

        // Material Design Bootstrap súgó: https://mdbootstrap.com/
        // Font Awesome:
        res.write("<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'>");
        // Google Fonts:
        res.write("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'>");
        // Bootstrap core CSS:
        res.write("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css'>");
        // Material Design Bootstrap:
        res.write("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.15.0/css/mdb.min.css'>");

        res.write("<title>Zenei ADÓK</title>");
        res.write("</head>");
        res.write("<body><form><pre class='m-3'>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->

        //1.feladat
        const megoldás = new Megoldás("musor.txt");

        //2.feladat
        res.write("\n2.feladat: zenék száma rádiónként: ");
        for (const zene of megoldás.ZenékRádiónként) {
            res.write(`\n\t ${zene[0]}: ${zene[1]}db`);
        }

        //3.feladat
        res.write("\n3.feladat: eltelt idő az első és utolsó Eric Clapton szám között az 1. adón:");
        let óra = 0;
        let perc = 0;
        let másodperc = 0;
        óra = megoldás.EricClapton / 3600;
        perc = (megoldás.EricClapton - óra * 3600) / 60;
        másodperc = megoldás.EricClapton - óra * 3600 - perc * 60;
        res.write(`\n\t ${óra}:${perc}:${másodperc}`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form>");

        // JQuery:
        res.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>");
        // Bootstrap tooltips:
        res.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js'></script>");
        // Bootstrap core JavaScript:
        res.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js'></script>");
        // MDB core JavaScript:
        res.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.15.0/js/mdb.min.js'></script>");

        res.write("</body></html>");
        res.end();
    }
}
