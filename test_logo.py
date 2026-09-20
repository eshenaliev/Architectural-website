import subprocess

svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="540" height="120" fill="#111111">
  <!-- Test geometry -->
</svg>"""

with open("test_logo.svg", "w") as f:
    f.write(svg_content)

print("Saved test_logo.svg")
