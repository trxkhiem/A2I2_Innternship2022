import sys
import logging
import rds_config
import pymysql

#rds settings
rds_host  = "database-new-sample.c0ls2h2typle.ap-southeast-2.rds.amazonaws.com"

# get config information from rds_config file
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()
logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")


def handler(event, context):
    """
    This function fetches content from MySQL RDS instance
    """

    item_count = 0

    with conn.cursor() as cur:
        cur.execute("create table Patient (PatientID  int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL, age int NOT NULL, diseases varchar(255) NOT NULL ,PRIMARY KEY (PatientID))")
        cur.execute('insert into Patient (Name, age, diseases) values("Terry", 22, "flu")')
        cur.execute('insert into Patient (Name, age, diseases) values("Kane", 16, "flu")')
        cur.execute('insert into Patient (Name, age, diseases) values("David", 31, "flu")')
        cur.execute('insert into Patient (Name, age, diseases) values("Timo", 30, "flu")')
        cur.execute('insert into Patient (Name, age, diseases) values("Mary", 25, "flu")')
        cur.execute('insert into Patient (Name, age, diseases) values("Alex", 12, "flu")')
    conn.commit()

    return "Added successfully" 