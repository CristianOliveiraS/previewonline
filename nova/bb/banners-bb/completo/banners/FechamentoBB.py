import os
import re
import shutil

base_path = os.path.dirname(os.path.abspath(__file__))

res_pattern = re.compile(r'(\d+x\d+)')

for folder in os.listdir(base_path):
    old_path = os.path.join(base_path, folder)
    if os.path.isdir(old_path) and not folder.startswith("."):
        
        match = re.search(r'^\d+-(\w+).*?(\d+x\d+)', folder, re.IGNORECASE)
        if match:
            nome = match.group(1).capitalize()
            resolucao = match.group(2)
            new_name = f"{nome}-{resolucao}"
            new_path = os.path.join(base_path, new_name)
            if old_path != new_path:
                print(f"Renomeando: {folder} -> {new_name}")
                os.rename(old_path, new_path)
            folder_path = new_path
        else:
            folder_path = old_path

        
        banner_path = os.path.join(folder_path, "banner")
        backup_path = os.path.join(folder_path, "backup")
        os.makedirs(banner_path, exist_ok=True)
        os.makedirs(backup_path, exist_ok=True)

        
        for item in os.listdir(folder_path):
            item_path = os.path.join(folder_path, item)
            if item_path in [banner_path, backup_path]:
                continue
            if os.path.isfile(item_path):
                print(f"Movendo {item} -> {banner_path}")
                shutil.move(item_path, banner_path)

res_pastas = {}
for folder in os.listdir(base_path):
    folder_path = os.path.join(base_path, folder)
    if os.path.isdir(folder_path) and not folder.startswith("."):
        match = res_pattern.search(folder)
        if match:
            resolucao = match.group(1)
            res_pastas[resolucao] = folder_path

for file in os.listdir(base_path):
    file_path = os.path.join(base_path, file)
    if os.path.isfile(file_path) and file.lower().endswith(".jpg"):
        match = res_pattern.search(file)
        if match:
            resolucao = match.group(1)
            if resolucao in res_pastas:
                backup_path = os.path.join(res_pastas[resolucao], "backup")
                os.makedirs(backup_path, exist_ok=True)
                shutil.move(file_path, os.path.join(backup_path, file))
                print(f"Movido: {file} -> {res_pastas[resolucao]}/backup/{file}")

for folder in os.listdir(base_path):
    if folder.startswith("."):
        continue
    folder_path = os.path.join(base_path, folder)
    if os.path.isdir(folder_path):
        
        match = res_pattern.search(folder)
        if not match:
            continue
        largura, altura = match.group(1).split('x')

        banner_path = os.path.join(folder_path, "banner")
        index_file = os.path.join(banner_path, "index.html")
        if os.path.exists(index_file):
            with open(index_file, "r", encoding="utf-8") as f:
                content = f.read()

            new_content, count = re.subn(
                r'(<meta\s+name="ad\.size"\s+content=")width=\d+,height=\d+(".*?>)',
                fr'\1width={largura},height={altura}\2',
                content
            )

            if count > 0:
                with open(index_file, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Atualizado index.html em: {banner_path}")
            else:
                print(f"Nenhuma meta tag ad.size encontrada em: {banner_path}")

print("Concluído!")
