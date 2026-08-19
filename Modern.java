import java.util.Arrays;

public class Modern {

    public static void main(String[] args){
        int[] arr = {1,2,3,4,5,6};
        int k = 2;
        int[] reversearr = Reverse(arr,k);
        System.out.println(Arrays.toString(reversearr));
    }
    public static int[] Reverse(int[] arr,int k){

        for(int i = 0;i<k;i++) {
            int tmp = arr[0];
            int l = 0;
            int r = arr.length-1;
            while (l < r) {
                arr[l]=arr[l+1];
                l++;
            }
            arr[r]=tmp;
        }
        return arr;
    }
}
