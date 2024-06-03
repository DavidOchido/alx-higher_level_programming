#!/usr/bin/bash
for c in range(97, 123):
    if c != ord('q') and c != ord('e'):
        print("{:c}".format(c), end='')

