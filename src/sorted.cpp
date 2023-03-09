#include <iostream>

using namespace std;

void display(int arr[], int n){
    
    
    for(int i = 0; i<n;i++){
        
        
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}


    int sortedimsertion(int arr[],int  size ,int element ,int capacity ,int index)
    
    {
        if(size >=capacity){
            return -1;
        }
        
        for (int i = size-1 ;  i>=index ; i--){
            arr[i+1]=arr[i];
            
        }
        arr[index]=element;
        
        return 1;
        
    }
int main()
{
   int arr[10]={1,2 , 6,78,13};
   
     int size =0, element, index;
     int a;
     cout<<"do you wanna continue"<<endl;
        cin>>a;
   while(a==1){  
    
   cout<<"size of array"<<endl;
   cin>>size;
   
   cout<<"element to insert"<<endl;
   cin>>element;
   
   cout<<"at which index"<<endl;
   cin>>index;
   
   a++;
   }
 
   
   display(arr,size);

sortedimsertion(arr, size ,element ,100,index);
size +=1;
    display(arr,size);

    return 0;
}