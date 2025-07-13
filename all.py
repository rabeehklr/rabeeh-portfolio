import os

# Project base path
BASE_DIR = "."

# Output file
OUTPUT_FILE = "output.txt"

# Folders to include (typical for React portfolio)
INCLUDE_DIRS = ['src', 'public']

# Specific config files to include
CONFIG_FILES = ['tailwind.config.js', 'postcss.config.js', 'vite.config.js', '.env', '.eslintrc', '.prettierrc']

# File types to include
INCLUDE_EXTENSIONS = ('.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.md')

# Ignore these folders inside src/public
EXCLUDE_DIRS = {'node_modules', 'dist', 'build', '.git'}

with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
    for folder in INCLUDE_DIRS:
        for root, dirs, files in os.walk(folder):
            # Skip unnecessary folders
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                if file.endswith(INCLUDE_EXTENSIONS):
                    rel_path = os.path.join(root, file)
                    try:
                        with open(rel_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            out_file.write(f"\n\n// --- {rel_path} ---\n")
                            out_file.write(content)
                    except Exception as e:
                        print(f"Error reading {rel_path}: {e}")

    # Add config files if they exist
    for config in CONFIG_FILES:
        if os.path.exists(config):
            try:
                with open(config, 'r', encoding='utf-8') as f:
                    content = f.read()
                    out_file.write(f"\n\n// --- {config} ---\n")
                    out_file.write(content)
            except Exception as e:
                print(f"Error reading {config}: {e}")

print(f"\n✅ Combined all necessary files into {OUTPUT_FILE}")
