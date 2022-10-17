import re

index_html = open('./dist/index.html', 'r+', encoding='utf8')

string = index_html.read()
# # print(string)
#
# # result = re.search(r'<script type="module" src="(.)+"></script>',string)
# result = re.search(r'<script type="module" src="/', string)
# print(result.group())
# # string.(,'')
string = string.replace('<script type="module" src="/', '<script  src="./')

index_html.close()

index_html = open('./dist/index.html', 'w', encoding='utf8')

index_html.write(string)

index_html.close()
