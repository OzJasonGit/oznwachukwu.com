# Upload file AWS S3

s3 = boto3.resource("s3")
bucket = s3.Bucket(S3_FOLIO_IMAGEES)
bucket.upload_fileobj(file.file, file.filename, ExtraArgs= {"ACL": "public-read"})


//example
// uploaded_file_url = f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"//


//photo_name: str 
  photo_url: str



uploaded_file_url = f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"

// Store URL in database 
conn = psycopg2.connect(
    database="exampledb", user="docker", password="docker", host="0.0.0.0"
)

cur = conn.cursor()
cur.execute(
    f"INSERT INTO photo_name, photo_url) VALUES ('{file.filename}', '{uploaded_file_url}' )"
)
 
conn.commit()
cur.close()
conn.close()







