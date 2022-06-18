"""

"""

import argparse

def setup():
    parser = argparse.ArgumentParser(description="test desc")
    parser.add_argument('test name',
                        metavar='test metavar',
                        type=str,
                        help='test help')
    return parser.parse_args()    

def main(args):
    print('howdy')

if __name__ == "__main__":
    args = setup()
    main(args)
