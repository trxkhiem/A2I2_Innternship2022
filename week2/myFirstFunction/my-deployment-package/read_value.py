import sys
import logging
import json
import collections
import rds_config
import pymysql

#rds settings
rds_host  = "database-new-sample.c0ls2h2typle.ap-southeast-2.rds.amazonaws.com"

# get config information from rds_config file
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

#set up log message
logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    #establish the connection with mysql rds
    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    # catch any errors from the 
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    
    #exit the connection and returned error message
    sys.exit()

logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

def handler(event, context):
    """
    This function fetches content from MySQL RDS instance
    """
    item_count = 0
    # setup empty object array 
    resut_list = []
    
    with conn.cursor() as cur:
        cur.execute("select * from Employee")
        for row in cur:
            item_count += 1
            d = collections.OrderedDict()
            d['id'] = row[0]
            d['name'] = row[1]
            resut_list.append(d)
            # logger.info(row[1])
            #print(row)
    conn.commit()
    
        
    return {
        'code': 200,
        'status': 'Success',
        'message': "Total %d items from RDS MySQL table" %(item_count),
        'body': json.dumps(resut_list)
    }