def str_number_to_float(str_number:str, sep=","):
    """
    Converts a number in decimal for as a string to float.
    """
    return (float(str_number.replace(sep, "."))
            if sep != "." else float(str_number))


def get_semester(code:str):
    """
    Gets the semester from the code in the report.
    ABC -> A: semester (1: first semester, 2: second semester)
        -> C: year (0: first year, 1: second year...)
    """
    if code[2] > "1":
        return f"{int(code[2]) - 1}-PROF-{code[0]}"
    return f"{int(code[2]) + 1}-FUND-{code[0]}"


def get_valid_credits(str_credits):
    """
    Gets the number of valid credits
    from the A-B-C-D specification.
    """
    credit  = str_credits.split("-")
    if len(credit) < 3:
        raise Exception("Invalid string")
    return float(credit[0]) + float(credit[1]) + float(credit[2])
