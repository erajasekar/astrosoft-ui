npm run generate
aws s3 cp dist s3://astrosoft-ui --recursive
aws cloudfront create-invalidation  --distribution-id  E1OHEP56ILDFU1  --paths "/*"

git tag $1;
git push origin --tags;


