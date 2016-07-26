#!/usr/bin/python3

from sys import argv, stdout
from os import walk

USAGE = argv[0] + ' dir'

def main():
    if len(argv) == 1:
        path = '.'
    elif len(argv) == 2:
        path = argv[1]
    else:
        print("argv ERR!")
        exit(1)

    abis_file = stdout
    abis_file.write("module.exports = {\n")

    for root, dirs, files in walk(path):
        for fname in [s for s in files if s[-5:] == ".json"]:
            abis_file.write(fname[:-5] + " : ")
            abis_file.writelines(open(root + "/" + fname).readlines())
            abis_file.write(", \n")
            pass

    abis_file.write("};\n")
    abis_file.close()

if __name__ == '__main__':
    main()
