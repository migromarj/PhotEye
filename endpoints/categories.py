from silence.decorators import endpoint

@endpoint(
    route="/categories",
    method="GET",
    sql="SELECT * FROM categories"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/categories/allData",
    method="GET",
    sql="SELECT * FROM categories NATURAL JOIN photoscategories NATURAL JOIN photos WHERE photos.visibility='Pública' ORDER BY photos.uploadDate DESC"
)
def get_all_data():
    pass

###############################################################################

@endpoint(
    route="/categories/$photoId",
    method="GET",
    sql="SELECT * FROM categories NATURAL JOIN photoscategories NATURAL JOIN photos WHERE photoId=$photoId",
    description="Gets all categories of a photo by its id",
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/categories/num/$photoId",
    method="GET",
    sql="SELECT COUNT(*) num FROM categories NATURAL JOIN photoscategories NATURAL JOIN photos WHERE photoId=$photoId",
    description="Gets the number of categories that have a photo with photoId=$photoId",
)
def get_num_by_id():
    pass

###############################################################################

@endpoint(
    route="/categories/name/$NAME",
    method="GET",
    sql="SELECT categories.categoryId FROM categories WHERE categories.NAME=$NAME",
    description="Gets categoryId by its name",
)
def get_by_name():
    pass

###############################################################################

@endpoint(
    route="/categories/allData/$NAME",
    method="GET",
    sql="SELECT * FROM categories NATURAL JOIN photoscategories NATURAL JOIN photos WHERE categories.NAME=$NAME AND photos.visibility='Pública' ORDER BY photos.uploadDate DESC"
)
def get_all_data_by_name():
    pass

###############################################################################

@endpoint(
    route="/categories",
    method="POST",
    sql="INSERT INTO Categories (NAME) VALUES ($NAME)",
    description="Creates a new category",
    auth_required=True,
)
def create_category(NAME):
    pass

###############################################################################

@endpoint(
    route="/photosCategories",
    method="POST",
    sql="INSERT INTO PhotosCategories (photoId, categoryId) VALUES ($photoId, $categoryId)",
    description="Creates a new photoCategory",
    auth_required=True,
)
def create_photoCategory(photoId, categoryId):
    pass

###############################################################################

@endpoint(
    route="/photosCategories/$photoId/$categoryId",
    method="DELETE",
    sql="DELETE FROM photosCategories WHERE photoId=$photoId AND categoryId = $categoryId ",
    description="Removes a photoCategory",
    auth_required=True,
)
def delete():
    pass