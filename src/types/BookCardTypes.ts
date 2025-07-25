export interface BookCard1 {
    Id?: string;
    image?: string;
    title?: string;
    highlights?: string;
    value?: string;
    number1?: string;
    location?: string;
    number2?: string;
    listhighlights?: (string | null | undefined)[];

    // for Category_Click
    C_image1?: string;
    C_image2?: string;
    C_image3?: string;
    C_image4?: string;
    CategoryData?:boolean;
    titleC?: string;

    // for Package_Click
    image1?: string;
    image2?: string;
    image31?: string;
    image32?: string;
    image4?: string;
    description?: string;
    HighlightDisc?: (string | null | undefined)[];
    facilityList?: (string | null | undefined)[];
    policyList?: (string | null | undefined)[];
    importantList?: (string | null | undefined)[];
    inclusionList?: (string | null | undefined)[];
    exclusionList?: (string | null | undefined)[];

    // activity
    activity?: string;
    Ldescription?: string;
    // onClick?: () => void;

    // destination
    destination?: string;
    content?: string;
    firstimage?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
    topic?: string[];
    des?: string[];   

    // user review card
    imageuser?: string;
    place?: string;
    date?: string;
    time?: string;
    bookingNO?: string;
    status?: string;
    adultPrice?: string;
    childPrice?: string;
    totalPrice?: string;
  }