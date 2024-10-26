x= int(input("Enter a number of rows: "))

def count(x):
    output=""
    for i in range(1,x+1):
        if i%2!=0:
            output+=str(i)+" "

    print(output)

def drawPyramid(x):
    for i in range(1,2*x,2):
        count(i)
    print("")

drawPyramid(x)