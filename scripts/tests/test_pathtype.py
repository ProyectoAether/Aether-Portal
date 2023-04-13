from argparse import ArgumentTypeError

import pytest
from ontoserpy.pathtype import PathType


def test_non_existent_directory():
    pathtype = PathType(type="dir")
    with pytest.raises(ArgumentTypeError):
        pathtype("nonexistent")


def test_non_existent_file():
    pathtype = PathType(type="file")
    with pytest.raises(ArgumentTypeError):
        pathtype("nonexistent")


def test_directory(tmp_path):
    pathtype = PathType(type="dir")
    assert pathtype(tmp_path.absolute()) == tmp_path.absolute()

def test_file(tmp_path):
    f = tmp_path / "exists.txt"
    f.write_text("hello world")
    pathtype = PathType(type="file")
    assert pathtype(f.absolute()) == f.absolute()
