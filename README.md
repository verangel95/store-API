### API DOCUMENTATION

#### store-api

###### GET List all products - /api/v1/products

########### Query Params

name: string

featured: Boolean

page: numeric

company: string

sort: sort any field (DESC by puting - at the beginning)
-name, name, -price, price

fields: Select files from the documents to show

limit: numeric

page: numeric

numericFilters: price,rating

">": "$gt",
">=": "$gte",
"=": "$eq",
"<": "$lt",
"<=": "$lte"

ex: price>40,rating>4.5
