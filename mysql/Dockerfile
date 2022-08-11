FROM mariadb

RUN chown -R root:root /var/lib/mysql

RUN chgrp -R mysql /var/lib/mysql

COPY ./scripts /docker-entrypoint-initdb.d

