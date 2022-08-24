from silence.decorators import endpoint

###############################################################################

@endpoint(
    route="/photos",
    method="GET",
    sql="SELECT * FROM photos WHERE photos.visibility='Pública' ORDER BY photos.uploadDate DESC LIMIT 12",
    description="Gets the last twelve photos ordered by date and that are public",
)
def get_photos_index():
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="GET",
    sql="SELECT * FROM Photos WHERE photoId = $photoId",
    description="Gets a photo with photoId = $photoId",
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/user/$userId",
    method="GET",
    sql="SELECT * FROM Photos WHERE userId = $userId AND photos.visibility='Pública' ORDER BY photos.uploadDate DESC",
    description="Gets the photos of a user with userId = $userId",
)
def get_by_userId():
    pass

###############################################################################

@endpoint(
    route="/photos/loggedIn/$userId",
    method="GET",
    sql="SELECT * FROM Photos WHERE userId = $userId ORDER BY photos.uploadDate DESC",
    description="Gets the photos of a user with userId = $userId",
)
def get_by_loggedInId():
    pass

###############################################################################

@endpoint(
    route="/photos/userl/$userId",
    method="GET",
    sql="SELECT DISTINCT photos.photoId,photos.url,photos.uploadDate,photos.title,photos.description,photos.visibility,photos.userId FROM photos JOIN useruser ON (photos.userId=useruser.userId2) WHERE useruser.userId1=$userId AND photos.visibility='Pública' ORDER BY photos.uploadDate DESC",
    description="Gets the photos of a user's followed",
)
def get_photos_follows():
    pass

###############################################################################

@endpoint(
    route="/photos",
    method="POST",
    sql="INSERT INTO Photos (url, title, description, visibility, userId) VALUES ($url, $title, $description, $visibility, $userId)",
    description="Creates a new photo",
    auth_required=True,
)
def create(url, title, description, visibility, userId):
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="PUT",
    sql="UPDATE Photos SET title = $title, description = $description, url = $url, visibility = $visibility WHERE photoId = $photoId",
    description="Updates an existing photo",
    auth_required=True,
)
def update(title, description, url, visibility):
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="DELETE",
    sql="DELETE FROM Photos WHERE photoId = $photoId",
    description="Removes a photo",
    auth_required=True,
)
def delete():
    pass
