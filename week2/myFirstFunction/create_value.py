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
        #cur.execute("create table Employee ( EmpID  int NOT NULL, Name varchar(255) NOT NULL, PRIMARY KEY (EmpID))")
        cur.execute('insert into Employee (EmpID, Name) values(7, "Terry")')
        cur.execute('insert into Employee (EmpID, Name) values(8, "Kane")')
        cur.execute('insert into Employee (EmpID, Name) values(9, "David")')
        cur.execute('insert into Employee (EmpID, Name) values(10, "Timo")')
        cur.execute('insert into Employee (EmpID, Name) values(11, "Mary")')
        cur.execute('insert into Employee (EmpID, Name) values(12, "Alex")')
    conn.commit()

    return "Added successfully" 