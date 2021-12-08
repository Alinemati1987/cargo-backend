config/config.json
remove:
"production": {
"use_env_variable": "DATABASE_URL",
"dialectOptions": {
"ssl": {
"rejectUnauthorized": false
}
}
}
