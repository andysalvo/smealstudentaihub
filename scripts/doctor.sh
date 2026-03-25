#!/bin/bash
echo "Checking prerequisites for Smeal Student AI Hub..."
echo ""
errors=0

# Node.js
if ! command -v node &> /dev/null; then
  echo "FAIL: Node.js not installed"
  errors=$((errors + 1))
else
  echo "OK: Node.js $(node -v)"
fi

# npm
if ! command -v npm &> /dev/null; then
  echo "FAIL: npm not installed"
  errors=$((errors + 1))
else
  echo "OK: npm $(npm -v)"
fi

# git
if ! command -v git &> /dev/null; then
  echo "FAIL: git not installed"
  errors=$((errors + 1))
else
  echo "OK: git $(git --version | cut -d' ' -f3)"
fi

echo ""
if [ $errors -gt 0 ]; then
  echo "$errors issue(s) found. Fix them before continuing."
  exit 1
else
  echo "All prerequisites met. Run 'npm install' to get started."
fi
