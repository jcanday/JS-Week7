# Find Middle Number
# ------------------

# Given a number (n) and an array of numbers (num_list) as input to a function, return True if the number is greater than the middle number of the array. Return False if the number is less than the middle number of the array.


# Example 1
# Input: n = 6, array = [3,5,8,10]
# Output: True

# Example 2
# Input: n = 105, array = [10,30,44,22,100]
# Output: True

def mid(n,lst):
    middle = len(lst) // 2
    if len(lst) % 2 == 0:
        if lst[middle-1] < n:            
            return True
    elif lst[middle] < n and len(lst) % 2 != 0:
        return True
    return False


print(mid(105,[10,30,144,22]))

## JS
# let mid = (n,lst) => {
#     let middle = Math.floor(lst.length / 2)
#     if (lst.length % 2 == 0)
#         if (lst[middle-1] < n){
#             return true
#         } else {
#             return false
#         }
#     else{
#         if (lst[middle] < n){
#             return true
#         } else {
#             return false
#         }
#     }
# }

#js2
# let mid = (n,lst) => {
#      let middle = Math.floor(lst.length / 2)
#      if (lst.length % 2 == 0)
#         return (lst[middle-1] < n ? true : false)
#      else{
#         return (lst[middle] < n ? true: false)
#     }
# }