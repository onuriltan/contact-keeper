module.exports = {
  "extends": ["standard", "standard-react"],
  "plugins": ["jest", "react-hooks"],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "env": {
    "jest/globals": true
  }
};