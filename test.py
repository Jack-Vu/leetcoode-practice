import math


arr = [5, 2, 7, 1, 4]
target = 10
res = []
closest = math.inf


arr.sort()
left = 0
right = len(arr) - 1

while left < right:
    currDiff = abs(target - (arr[left] + arr[right]))
    if currDiff < closest:
        res = [min(arr[left], arr[right]), max(arr[left], arr[right])]
        right -= 1
        closest = currDiff
    elif currDiff == closest and res[1] - res[0] < abs(arr[left] - arr[right]):
        res = [min(arr[left], arr[right]), max(arr[left], arr[right])]
        left += 1
    else:
        left += 1

5, 10, 20, 30
print(res)
