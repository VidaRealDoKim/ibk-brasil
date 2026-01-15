#!/usr/bin/env python3
import os
import time
import http.server
import socketserver
import threading
from pathlib import Path

PORT = 8002
WATCH_FILE = "ibk-standalone.html"

class HotReloadHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/' or self.path == '/ibk-standalone.html':
            file_path = 'ibk-standalone.html'
            if os.path.exists(file_path):
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Injeta script de hot reload antes de </body>
                hot_reload_script = '''
    <script>
        (function() {
            let lastModified = document.lastModified;
            
            setInterval(function() {
                fetch('ibk-standalone.html?t=' + Date.now())
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const newDoc = parser.parseFromString(html, 'text/html');
                        const newModified = newDoc.lastModified;
                        
                        if (newModified !== lastModified) {
                            console.log('Arquivo atualizado, recarregando...');
                            window.location.reload();
                        }
                    })
                    .catch(err => console.log('Erro ao verificar atualizações:', err));
            }, 1000);
        })();
    </script>
'''
                content = content.replace('</body>', hot_reload_script + '</body>')
                
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
                self.end_headers()
                self.wfile.write(content.encode('utf-8'))
                return
        
        # Para outros arquivos, serve normalmente
        super().do_GET()
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    handler = HotReloadHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), handler)
    
    print(f"🔥 Hot Reload Server rodando em http://localhost:{PORT}/ibk-standalone.html")
    print("   O navegador vai recarregar automaticamente quando o arquivo for alterado!")
    print("   Pressione Ctrl+C para parar o servidor.\n")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✋ Servidor parado.")
        httpd.shutdown()

if __name__ == '__main__':
    start_server()
