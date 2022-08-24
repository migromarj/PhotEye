from silence.decorators import endpoint


@endpoint(
    route="/users/user/$userId",
    method="GET",
    sql="SELECT * FROM Users WHERE users.userId!=$userId ORDER BY users.userName",
    description="Gets all users except the user with userId=$userId",
)
def get_all_except1():
    pass


################################################################

@endpoint(
    route="/users/$userId",
    method="GET",
    sql="SELECT * FROM Users WHERE userId = $userId",
    description="Gets the user with userId=$userId"
)
def get_by_id():
    pass

################################################################

@endpoint(
    route="/users/username/$userName",
    method="GET",
    sql="SELECT * FROM Users WHERE userName = $userName",
    description="Gets the user with userName = $userName"
)
def get_by_username():
    pass

################################################################

@endpoint(
    route="/users/$userId/npublications",
    method="GET",
    sql="SELECT COUNT(photos.photoId) nPublications FROM photos WHERE userId=$userId",
    description="Gets the number of publications from the user with userId=$userId"
)
def get_user_nPublications():
    pass

################################################################

@endpoint(
    route="/users/$userId/ncomments",
    method="GET",
    sql="SELECT COUNT(comments.commentId) nComments FROM comments WHERE userId=$userId",
    description="Gets the number of comments from the user with userId=$userId"
)
def get_user_nComments():
    pass

################################################################

@endpoint(
    route="/users/$userId/nfollows",
    method="GET",
    sql="SELECT COUNT(useruser.userId2) nFollows FROM useruser WHERE userId1=$userId",
    description="Gets the number of follows from the user with userId1=$userId"
)
def get_user_nfollows():
    pass

################################################################

@endpoint(
    route="/users/$userId/nfollowers",
    method="GET",
    sql="SELECT COUNT(useruser.userId1) nFollowers FROM useruser WHERE userId2=$userId",
    description="Gets the number of followers from the user with userId2=$userId"
)
def get_user_nfollowers():
    pass

################################################################

@endpoint(
    route="/users/$userId/followers",
    method="GET",
    sql="SELECT users.userId, users.userName, users.profilePictureURL FROM users JOIN useruser ON (users.userId=useruser.userId1) WHERE userId2=$userId",
    description="Gets the data of followers from the user with userId2=$userId"
)
def get_FollowersBy_UserId():
    pass


################################################################

@endpoint(
    route="/users/$userId/follows",
    method="GET",
    sql="SELECT users.userId, users.userName, users.profilePictureURL FROM users JOIN useruser ON (users.userId=useruser.userId2) WHERE userId1=$userId",
    description="Gets the data of follows from the user with userId1=$userId"
)
def get_FollowsBy_UserId():
    pass

################################################################

@endpoint(
    route="/users/exist/$userId1/$userId2",
    method="GET",
    sql="SELECT COUNT(*) bin FROM useruser WHERE useruser.userId1 = $userId1 AND useruser.userId2 = $userId2",
    description="Returns 1 if a user with userId=userId1 follows a user with userId=userId2"
)
def get_bin():
    pass

################################################################

@endpoint(
    route="/users/$userId",
    method="PUT",
    sql="UPDATE Users SET name = $name, surnames = $surnames, phoneNumber = $phoneNumber, email = $email, userName = $userName, profilePictureURL = $profilePictureURL WHERE userId = $userId",
    description="Updates an existing user",
    auth_required=True,
)
def update(name, surnames, phoneNumber, email, userName, profilePictureURL):
    pass

###############################################################################

@endpoint(
    route="/useruser",
    method="POST",
    sql="INSERT INTO UserUser (userId1, userId2) VALUES ($userId1, $userId2)",
    description="User with userId=userId1 follows a user with userId=userId2",
    auth_required=True,
)
def create(userId1, userId2):
    pass

###############################################################################

@endpoint(
    route="/useruser/$userId1/$userId2",
    method="DELETE",
    sql="DELETE FROM UserUser WHERE UserUser.userId1 = $userId1 AND UserUser.userId2 = $userId2",
    description="User with userId=userId1 stops following a user with userId=userId2",
    auth_required=True,
)
def delete():
    pass