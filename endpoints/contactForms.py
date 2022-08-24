from silence.decorators import endpoint

###############################################################################

@endpoint(
    route="/contactForms",
    method="POST",
    sql="INSERT INTO ContactForms (name, surnames, phoneNumber, email, comments) VALUES ($name, $surnames, $phoneNumber, $email, $comments)",
    description="Creates a contact request",
    auth_required=False,
)
def create(name, surnames, phoneNumber, email, comments):
    pass