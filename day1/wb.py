# Minimum Index Sum of Two Lists
# Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
# You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
 
# Example 1:
# Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
# Output: ["Shogun"]
# Explanation: The only restaurant they both like is "Shogun".
 
# Example 2:
# Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
# Output: ["Shogun"]
# Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 
# Example 3:
# Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
# Output: ["KFC","Burger King","Tapioca Express","Shogun"]
 
# Example 4:
# Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
# Output: ["KFC","Burger King","Tapioca Express","Shogun"]
 
# Example 5:
# Input: list1 = ["KFC"], list2 = ["KFC"]
# Output: ["KFC"]

def min(lst1,lst2):
    lst3 = list(set(lst1).intersection(lst2))
    sums = []
    lowest = None
    x = 0
    while x < len(lst3):
        if lst3[x] in lst1 and lst3[x] in lst2:
            if not lowest:
                lowest = (lst1.index(lst3[x]),lst2.index(lst3[x]))
                sums.append(lowest)
            else:
                if lowest[0] + lowest[1] >= lst1.index(lst3[x]) + lst2.index(lst3[x]):
                    lowest = (lst1.index(lst3[x]),lst2.index(lst3[x]))
                    sums.append(lowest)
        x += 1
        
    return [lst3[sum[0]] for sum in sums]
        
print(min(["Shogun","Tapioca Express","Burger King","KFC"],["KFC","Burger King","Tapioca Express","Shogun"]))