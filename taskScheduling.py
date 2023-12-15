# Problem : https://www.hackerrank.com/challenges/task-scheduling

import sys
class tree:
    __slots__ = ("left", "right", "free", "size")
    def __init__(self, size = 2):
        if size == 0:
            return None
        if size > 1:
            half = size // 2
            self.left = tree(size - half)
            self.right = tree(half)
        else:
            self.left = self.right = None
        self.free = size
        self.size = size

    def resize(self, n):
        while self.size < n:
            t = tree(0)
            t.left = self
            t.right = tree(self.size)
            t.free = t.left.size + t.right.size
            t.size = self.size * 2
            self = t
        return self

    def recfill(self, dur, end):
        if dur == 0:
            return 0
        if self.free == 0:
            return 0 
        if (self.size <= dur and dur <= end) or self.size == 1:
            r = self.free
            self.free = 0
            return r
        r = 0
        if self.left.size < end:
            r += self.right.recfill(dur, end - self.left.size)
        r += self.left.recfill(dur - r, end)
        self.free -= r
        return r

t = tree()
r = 0
nlines = int(sys.stdin.readline().strip())
for i in range(nlines):
    two_strings = sys.stdin.readline().strip().split(" ")
    end, dur = (int(i) for i in two_strings)
    t = t.resize(end)
    b = t.recfill(dur, end)
    r = r + dur - b
    print(r)