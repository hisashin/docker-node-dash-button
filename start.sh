#!/bin/sh

forever start --pidFile /var/run/dash.pid -l /dev/null -a -d -c "node" /dash.js

cat <<EOF >>~/.bashrc
trap 'forever stop /dash.js; exit 0' TERM
EOF
exec /bin/sh

