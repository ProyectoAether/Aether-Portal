from ontoserpy.type_checking import ParsedURL


def test_parsed_url():
    same_url_a = ParsedURL("https://google.com")
    same_url_b = ParsedURL("http://google.com")
    assert same_url_b == same_url_a
    same_url_b = ParsedURL("http://google.com/")
    assert same_url_b == same_url_a
    same_url_b = ParsedURL("http://google.com#")
    assert same_url_b == same_url_a
    same_url_b = ParsedURL("http://google.com#something")
    assert same_url_b == same_url_a
