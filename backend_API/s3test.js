# Upload file AWS S3

s3 = boto3.resource("s3")
bucket = s3.Bucket(S3_FOLIO_IMAGEES)
bucket.upload_fileobj(file.file, file.filename, ExtraArgs= {"ACL": "public-read"})