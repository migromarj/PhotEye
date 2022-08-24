from silence.decorators import endpoint

###############################################################################

@endpoint(
    route="/comments",
    method="GET",
    sql="SELECT comments.commentId,comments.txt,comments.dateP,comments.userId,comments.photoId FROM comments JOIN photos ON (comments.photoId=photos.photoId) WHERE photos.visibility='Pública' ORDER BY comments.dateP DESC"
)
def get_comments():
    pass

###############################################################################

@endpoint(
    route="/comments/$commentId",
    method="GET",
    sql="SELECT * FROM Comments WHERE commentId = $commentId",
    description="Gets a comment by its id",
)
def get_comment_by_id():
    pass

###############################################################################

@endpoint(
    route="/comments/photo/$photoId",
    method="GET",
    sql="SELECT * FROM Comments WHERE photoId = $photoId",
    description="Gets all comments of a photo by photoId",
)
def get_comment_by_photo_id():
    pass

###############################################################################

@endpoint(
    route="/comments/num/photo/$photoId",
    method="GET",
    sql="SELECT COUNT(*) num FROM Comments WHERE photoId = $photoId",
    description="Gets the number of comments that have a photo with photoId=$photoId",
)
def get_comment_num_by_photo_id():
    pass

###############################################################################

@endpoint(
    route="/comments",
    method="POST",
    sql="INSERT INTO Comments (txt, userId, photoId) VALUES ($txt, $userId, $photoId)",
    description="Creates a new comment",
    auth_required=True,
)
def create(txt, userId, photoId):
    pass

###############################################################################