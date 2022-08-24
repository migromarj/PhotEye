from silence.decorators import endpoint


###############################################################################

@endpoint(
    route="/ratings/$photoId",
    method="GET",
    sql="SELECT AVG(ratings.punctuation) punctuation FROM photos JOIN ratings ON (photos.photoId = ratings.photoId) WHERE photos.photoId = $photoId",
    description="Gets the rating of a photo with photoId=$photoId",
)
def get_photos_ratings():
    pass

###############################################################################

@endpoint(
    route="/ratings/user/$userId",
    method="GET",
    sql="SELECT * FROM ratings JOIN photos ON (ratings.photoId = photos.photoId) WHERE ratings.userId = $userId AND photos.visibility='Pública' ORDER BY ratings.dateP DESC",
    description="Gets the ratings of a user with userId = $userId",
)
def get_photos_ratings():
    pass

###############################################################################

@endpoint(
    route="/ratings",
    method="POST",
    sql="INSERT INTO Ratings (punctuation, userId, photoId) VALUES ($punctuation, $userId, $photoId)",
    description="Creates a new rating",
    auth_required=True,
)
def create(punctuation, userId, photoId):
    pass