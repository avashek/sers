#!/usr/bin/python

import MySQLdb

# Open database connection
db=MySQLdb.connect("52.36.91.53","eren","mikasa","ops")

# prepare a cursor object using cursor() method
cursor = db.cursor()

# execute SQL query using execute() method.
cursor.execute("SELECT VERSION()")

# Fetch a single row using fetchone() method.
data = cursor.fetchone()
d= 255
cursor.execute("""INSERT INTO SENSOR (DISTANCE) VALUES("%s")""",(d))
select_stmt = "SELECT * FROM SENSOR WHERE ID= %(id)s"
cursor.execute(select_stmt,{'id':2})
db.commit()
# disconnect from server
print "Database version : %s " % data
