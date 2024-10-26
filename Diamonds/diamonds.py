x = int(input("Enter a number of rows: "))

def drawDiamond(x):
    for i in range(1, x+1):
        r=2*i-1
        stars="*"*r
        spaces=" "*(x-i)
        print(spaces+stars)

    for i in range(2*x-3, 0, -2):
        stars="*"*i
        spaces=" "*((2*x-1-i)//2)
        print(spaces+stars)
        
drawDiamond(x)
