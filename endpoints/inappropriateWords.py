from silence.decorators import endpoint

###############################################################################

@endpoint(
    route="/inappropriateWords",
    method="GET",
    sql="SELECT * FROM inappropriateWords",
    description="Gets all inappropriateWords",
)
def get_inappropriateWords():
    pass