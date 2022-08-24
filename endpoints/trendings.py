from silence.decorators import endpoint


###############################################################################

@endpoint(
    route="/trendings/categories",
    method="GET",
    sql="SELECT categories.NAME, COUNT(*) uses FROM categories NATURAL JOIN photoscategories GROUP BY categories.NAME ORDER BY COUNT(*) DESC LIMIT 5",
    description="Gets the five most used categories",
)
def get_trending_categories():
    pass

###############################################################################

@endpoint(
    route="/trendings/users/followers",
    method="GET",
    sql="SELECT useruser.userId2, users.profilePictureURL, users.userName ,COUNT(*) nfollowers FROM useruser JOIN users ON (useruser.userId2=users.userId) GROUP BY useruser.userId2 ORDER BY COUNT(*) DESC LIMIT 5",
    description="Gets the five users with the most followers",
)
def get_trending_users1():
    pass

###############################################################################

@endpoint(
    route="/trendings/users/punctuation",
    method="GET",
    sql="SELECT photos.userId, users.profilePictureURL, users.userName, AVG(ratings.punctuation) punctuation FROM (photos JOIN ratings ON (photos.photoId=ratings.photoId)) JOIN users ON (users.userId=photos.userId) GROUP BY photos.userId ORDER BY AVG(ratings.punctuation) DESC LIMIT 5",
    description="Gets the five users with the most rating",
)
def get_trending_users2():
    pass

###############################################################################

@endpoint(
    route="/trendings/photos/punctuation",
    method="GET",
    sql="SELECT photos.photoId, photos.url, photos.title, users.userName, AVG(ratings.punctuation) punctuation FROM (photos JOIN ratings ON (photos.photoId=ratings.photoId)) JOIN users ON (users.userId=photos.userId) WHERE photos.uploadDate>= DATE_SUB(NOW(),INTERVAL 7 DAY) AND photos.uploadDate<= NOW() AND photos.visibility='Pública' GROUP BY photos.photoId ORDER BY AVG(ratings.punctuation) DESC LIMIT 5",
    description="Gets the five photos with the most rating",
)
def get_trending_photos1():
    pass

###############################################################################

@endpoint(
    route="/trendings/photos/comment",
    method="GET",
    sql="SELECT photos.photoId, photos.url, photos.title, users.userName, COUNT(*) nComments FROM (photos JOIN comments ON (photos.photoId=comments.photoId)) JOIN users ON (users.userId=photos.userId) WHERE photos.uploadDate>= DATE_SUB(NOW(),INTERVAL 7 DAY) AND photos.uploadDate<= NOW() AND photos.visibility='Pública' GROUP BY photos.photoId ORDER BY COUNT(*) DESC LIMIT 5",
    description="Gets the five photos with the most number of comments",
)
def get_trending_photos2():
    pass