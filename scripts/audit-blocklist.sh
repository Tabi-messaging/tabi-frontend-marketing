#!/usr/bin/env bash
# Fail if disallowed internal-stack references appear in app source (grep only; works in GitHub Actions).
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

fail() {
  echo "BLOCKLIST: $1" >&2
  exit 1
}

scan_file() {
  local f="$1"
  local p
  for p in go_whatsapp go-whatsapp GoWhatsApp PSIRS_INFRA MONNIFY_ PAYSTACK_SECRET AZURE_ API_UPSTREAM; do
    if grep -qF "$p" "$f" 2>/dev/null; then
      echo "Disallowed token: $p" >&2
      grep -nF "$p" "$f" >&2 || true
      fail "see above"
    fi
  done
  if grep -qE '(^|[^A-Za-z0-9])PSIRS([^A-Za-z0-9]|$)' "$f" 2>/dev/null; then
    grep -nE '(^|[^A-Za-z0-9])PSIRS([^A-Za-z0-9]|$)' "$f" >&2 || true
    fail "PSIRS"
  fi
  if grep -qE 'gateway\.' "$f" 2>/dev/null; then
    grep -nE 'gateway\.' "$f" >&2 || true
    fail "gateway hostname"
  fi
}

while IFS= read -r -d '' f; do
  scan_file "$f"
done < <(find src public -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' -o -name '*.css' -o -name '*.md' -o -name '*.json' -o -name '*.svg' \) -print0 2>/dev/null)

for f in package.json next.config.ts tsconfig.json postcss.config.mjs .env.example; do
  [[ -f "$f" ]] || continue
  scan_file "$f"
done

if [[ -d .github ]]; then
  while IFS= read -r -d '' f; do
    scan_file "$f"
  done < <(find .github -type f \( -name '*.yml' -o -name '*.yaml' \) -print0 2>/dev/null)
fi

[[ -f .env ]] && fail "committed .env — use .env.local only"

echo "OK: blocklist audit passed."
