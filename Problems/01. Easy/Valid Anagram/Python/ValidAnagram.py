def isAnagram(self, s: str, t:str) -> bool:
    if len(s) != len(t): return False
    countS = {};
    countT = {}
