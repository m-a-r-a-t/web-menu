import os
import re
from pathlib import Path

dir_path = './dist'
js_file_name = ''

# print(Path(dir_path))

files = os.listdir(Path(dir_path))

os.mkdir(Path(dir_path, 'assets'))

for file_name in files:
    if re.search(r'.js$', file_name):
        js_file_name = file_name
        break

js_file = open(Path(dir_path, js_file_name), 'r+', encoding='utf8')

js_file_content = js_file.read()

js_file.close()

# print(js_file_content)

for file_name in files:

    if re.search(r'(.png|.webp|.jpg)$', file_name):
        os.replace(Path(dir_path, file_name), Path(dir_path, 'assets', file_name))
        js_file_content = js_file_content.replace(file_name, f'./assets/{file_name}')

js_file = open(Path(dir_path, js_file_name), 'w', encoding='utf8')
js_file.write(js_file_content)
js_file.close()

for file_name in files:
    if re.search(r'.map$', file_name):
        os.remove(Path(dir_path, file_name))
        break

# print(files)
