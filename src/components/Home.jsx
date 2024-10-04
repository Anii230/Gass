import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import PhoneAnimation from '../animations/PhoneAnimation.jsx'
import SignUpAnimation from '../animations/SignUpAnimation.jsx'
import useLenis from '../hooks/useLenis'
import "./Components.css"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const Home = () => {
    useLenis()

    useGSAP(() => {

        const t1 = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                // markers:true,
                pin: true,
                // pinSpacing:false,
                pinSpacer: false,
                trigger: ".home-grid",
                start: "top 5%",
                end: "bottom 50%",
            }
        })
        t1.from(".G, .A, .S1, .S2", {
            y: 500,
            opacity: 0,
            duration: 0.5,
            // delay:2,
            ease: "power2.inOut",
            stagger: 0.1,
        })

        const t2 = gsap.timeline({
            scrollTrigger:{
                trigger:".home-sec4",
                start:"50% 50%",
                end:"200% 50%",
                pin:true,
                // markers:true,
                scrub:1,
            }
        })

        t2.fromTo(".c-one",
            { marginTop: "50%", opacity: 0 },
            { marginTop: "0%", opacity: 1, duration: 1 }, 'sct-1'
        ).to(".c-one",
            { marginTop: "-50%", opacity: 0, duration: 1 }, 'sct-2');

        t2.fromTo(".c-two",
            { marginTop: "50%", opacity: 0 },
            { marginTop: "0%", opacity: 1, duration: 1 }, 'sct-2+=0.5'
        ).to(".c-two",
            { marginTop: "-100%", opacity: 0, duration: 1 }, 'sct-3+=0.5');

        t2.fromTo(".c-three",
            { marginTop: "50%", opacity: 0 },
            { marginTop: "0%", opacity: 1, duration: 1 }, 'sct-3+=0.5'
        ).to(".c-three",
            { marginTop: "-50%", opacity: 0, duration: 1 }, 'sct-4+=0.5');

    })

    return (

        <>
            <div className="homediv">
                <div className="home-svg">
                    <svg id="logo" width="956" height="270" viewBox="0 0 956 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M864.824 108.344H847.1C839.58 108.344 834.16 106.439 830.84 102.631C827.52 98.7246 825.859 93.5977 825.859 87.25C825.859 73.1875 836.357 66.1562 857.354 66.1562C877.08 66.1562 891.924 69.0859 901.885 74.9453L893.389 81.3906C886.553 78.2656 874.541 76.7031 857.354 76.7031C848.955 76.7031 843.291 77.6309 840.361 79.4863C837.529 81.3418 836.113 83.9297 836.113 87.25C836.113 90.5703 836.895 93.1582 838.457 95.0137C840.02 96.8691 842.9 97.7969 847.1 97.7969H865.264C878.447 97.7969 890.312 100.043 900.859 104.535C911.504 109.027 920.244 115.18 927.08 122.992C933.916 130.707 939.141 139.643 942.754 149.799C946.367 159.857 948.174 170.648 948.174 182.172C948.174 191.547 946.855 200.434 944.219 208.832C941.582 217.23 937.578 224.945 932.207 231.977C926.934 239.008 920.537 245.111 913.018 250.287C905.596 255.365 896.709 259.32 886.357 262.152C876.104 265.082 864.971 266.547 852.959 266.547C834.111 266.547 816.436 263.666 799.932 257.904C783.525 252.24 769.854 244.281 758.916 234.027L767.412 227.729C777.373 236.713 789.824 243.695 804.766 248.676C819.805 253.559 835.869 256 852.959 256C866.338 256 878.398 254.096 889.141 250.287C899.98 246.381 908.867 241.059 915.801 234.32C922.832 227.582 928.203 219.77 931.914 210.883C935.723 201.996 937.627 192.426 937.627 182.172C937.627 168.598 934.893 156.342 929.424 145.404C923.955 134.369 915.605 125.434 904.375 118.598C893.242 111.762 880.059 108.344 864.824 108.344ZM847.1 118.891H863.799C883.623 118.891 899.102 124.945 910.234 137.055C921.465 149.164 927.08 164.203 927.08 182.172C927.08 200.434 920.586 215.57 907.598 227.582C894.609 239.496 876.396 245.453 852.959 245.453C837.334 245.453 822.734 243.305 809.16 239.008C795.586 234.711 784.307 228.656 775.322 220.844L783.525 214.252C791.533 220.795 801.592 225.873 813.701 229.486C825.908 233.1 838.994 234.906 852.959 234.906C873.564 234.906 889.287 229.975 900.127 220.111C911.064 210.248 916.533 197.602 916.533 182.172C916.533 166.938 911.943 154.34 902.764 144.379C893.682 134.418 880.645 129.438 863.652 129.438H847.1C832.842 129.438 822.148 125.531 815.02 117.719C807.891 109.906 804.326 99.75 804.326 87.25C804.326 74.75 808.721 64.5938 817.51 56.7812C826.396 48.9688 839.678 45.0625 857.354 45.0625C869.756 45.0625 881.279 46.5273 891.924 49.457C902.568 52.2891 911.357 56.3906 918.291 61.7617L909.941 68.207C897.734 59.8086 880.205 55.6094 857.354 55.6094C842.607 55.6094 831.816 58.5391 824.98 64.3984C818.242 70.1602 814.873 77.7773 814.873 87.25C814.873 96.8203 817.363 104.486 822.344 110.248C827.422 116.01 835.674 118.891 847.1 118.891ZM847.1 139.984H863.213C877.471 139.984 888.164 143.939 895.293 151.85C902.422 159.76 905.986 169.867 905.986 182.172C905.986 194.672 901.543 204.828 892.656 212.641C883.867 220.453 870.635 224.359 852.959 224.359C840.557 224.359 828.984 222.943 818.242 220.111C807.598 217.182 798.809 213.031 791.875 207.66L800.225 201.215C812.432 209.613 830.01 213.812 852.959 213.812C867.705 213.812 878.447 210.932 885.186 205.17C892.021 199.311 895.439 191.645 895.439 182.172C895.439 172.699 892.9 165.082 887.822 159.32C882.744 153.461 874.492 150.531 863.066 150.531H847.1C827.08 150.531 811.406 144.574 800.078 132.66C788.848 120.648 783.232 105.512 783.232 87.25C783.232 68.9883 789.727 53.9004 802.715 41.9863C815.703 29.9746 833.916 23.9688 857.354 23.9688C872.979 23.9688 887.529 26.1172 901.006 30.4141C914.58 34.7109 925.859 40.7656 934.844 48.5781L926.641 55.1699C918.633 48.627 908.574 43.5488 896.465 39.9355C884.355 36.3223 871.318 34.5156 857.354 34.5156C836.748 34.5156 820.977 39.4473 810.039 49.3105C799.199 59.1738 793.779 71.8203 793.779 87.25C793.779 102.582 798.369 115.229 807.549 125.189C816.729 135.053 829.912 139.984 847.1 139.984ZM847.1 161.078H863.213C870.732 161.078 876.152 163.031 879.473 166.938C882.793 170.844 884.453 175.922 884.453 182.172C884.453 196.234 873.955 203.266 852.959 203.266C833.135 203.266 818.242 200.336 808.281 194.477L816.777 188.031C823.613 191.156 835.674 192.719 852.959 192.719C861.357 192.719 866.973 191.791 869.805 189.936C872.734 188.08 874.199 185.492 874.199 182.172C874.199 178.949 873.369 176.41 871.709 174.555C870.146 172.602 867.217 171.625 862.92 171.625H847.1C833.623 171.625 821.416 169.428 810.479 165.033C799.639 160.639 790.703 154.584 783.672 146.869C776.738 139.154 771.416 130.219 767.705 120.062C763.994 109.906 762.139 98.9688 762.139 87.25C762.139 77.875 763.457 68.9883 766.094 60.5898C768.73 52.1914 772.686 44.4766 777.959 37.4453C783.33 30.4141 789.727 24.3594 797.148 19.2812C804.668 14.1055 813.555 10.1016 823.809 7.26953C834.16 4.33984 845.342 2.875 857.354 2.875C876.201 2.875 893.828 5.75586 910.234 11.5176C926.641 17.1816 940.312 25.1406 951.25 35.3945L942.754 41.6934C932.793 32.709 920.342 25.7754 905.4 20.8926C890.459 15.9121 874.443 13.4219 857.354 13.4219C843.975 13.4219 831.865 15.375 821.025 19.2812C810.283 23.0898 801.396 28.3633 794.365 35.1016C787.432 41.8398 782.061 49.6523 778.252 58.5391C774.541 67.4258 772.686 76.9961 772.686 87.25C772.686 101.02 775.469 113.422 781.035 124.457C786.602 135.492 795.098 144.379 806.523 151.117C817.949 157.758 831.475 161.078 847.1 161.078Z" stroke="white" stroke-width="5" />
                        <path d="M660.039 108.344H642.314C634.795 108.344 629.375 106.439 626.055 102.631C622.734 98.7246 621.074 93.5977 621.074 87.25C621.074 73.1875 631.572 66.1562 652.568 66.1562C672.295 66.1562 687.139 69.0859 697.1 74.9453L688.604 81.3906C681.768 78.2656 669.756 76.7031 652.568 76.7031C644.17 76.7031 638.506 77.6309 635.576 79.4863C632.744 81.3418 631.328 83.9297 631.328 87.25C631.328 90.5703 632.109 93.1582 633.672 95.0137C635.234 96.8691 638.115 97.7969 642.314 97.7969H660.479C673.662 97.7969 685.527 100.043 696.074 104.535C706.719 109.027 715.459 115.18 722.295 122.992C729.131 130.707 734.355 139.643 737.969 149.799C741.582 159.857 743.389 170.648 743.389 182.172C743.389 191.547 742.07 200.434 739.434 208.832C736.797 217.23 732.793 224.945 727.422 231.977C722.148 239.008 715.752 245.111 708.232 250.287C700.811 255.365 691.924 259.32 681.572 262.152C671.318 265.082 660.186 266.547 648.174 266.547C629.326 266.547 611.65 263.666 595.146 257.904C578.74 252.24 565.068 244.281 554.131 234.027L562.627 227.729C572.588 236.713 585.039 243.695 599.98 248.676C615.02 253.559 631.084 256 648.174 256C661.553 256 673.613 254.096 684.355 250.287C695.195 246.381 704.082 241.059 711.016 234.32C718.047 227.582 723.418 219.77 727.129 210.883C730.938 201.996 732.842 192.426 732.842 182.172C732.842 168.598 730.107 156.342 724.639 145.404C719.17 134.369 710.82 125.434 699.59 118.598C688.457 111.762 675.273 108.344 660.039 108.344ZM642.314 118.891H659.014C678.838 118.891 694.316 124.945 705.449 137.055C716.68 149.164 722.295 164.203 722.295 182.172C722.295 200.434 715.801 215.57 702.812 227.582C689.824 239.496 671.611 245.453 648.174 245.453C632.549 245.453 617.949 243.305 604.375 239.008C590.801 234.711 579.521 228.656 570.537 220.844L578.74 214.252C586.748 220.795 596.807 225.873 608.916 229.486C621.123 233.1 634.209 234.906 648.174 234.906C668.779 234.906 684.502 229.975 695.342 220.111C706.279 210.248 711.748 197.602 711.748 182.172C711.748 166.938 707.158 154.34 697.979 144.379C688.896 134.418 675.859 129.438 658.867 129.438H642.314C628.057 129.438 617.363 125.531 610.234 117.719C603.105 109.906 599.541 99.75 599.541 87.25C599.541 74.75 603.936 64.5938 612.725 56.7812C621.611 48.9688 634.893 45.0625 652.568 45.0625C664.971 45.0625 676.494 46.5273 687.139 49.457C697.783 52.2891 706.572 56.3906 713.506 61.7617L705.156 68.207C692.949 59.8086 675.42 55.6094 652.568 55.6094C637.822 55.6094 627.031 58.5391 620.195 64.3984C613.457 70.1602 610.088 77.7773 610.088 87.25C610.088 96.8203 612.578 104.486 617.559 110.248C622.637 116.01 630.889 118.891 642.314 118.891ZM642.314 139.984H658.428C672.686 139.984 683.379 143.939 690.508 151.85C697.637 159.76 701.201 169.867 701.201 182.172C701.201 194.672 696.758 204.828 687.871 212.641C679.082 220.453 665.85 224.359 648.174 224.359C635.771 224.359 624.199 222.943 613.457 220.111C602.812 217.182 594.023 213.031 587.09 207.66L595.439 201.215C607.646 209.613 625.225 213.812 648.174 213.812C662.92 213.812 673.662 210.932 680.4 205.17C687.236 199.311 690.654 191.645 690.654 182.172C690.654 172.699 688.115 165.082 683.037 159.32C677.959 153.461 669.707 150.531 658.281 150.531H642.314C622.295 150.531 606.621 144.574 595.293 132.66C584.062 120.648 578.447 105.512 578.447 87.25C578.447 68.9883 584.941 53.9004 597.93 41.9863C610.918 29.9746 629.131 23.9688 652.568 23.9688C668.193 23.9688 682.744 26.1172 696.221 30.4141C709.795 34.7109 721.074 40.7656 730.059 48.5781L721.855 55.1699C713.848 48.627 703.789 43.5488 691.68 39.9355C679.57 36.3223 666.533 34.5156 652.568 34.5156C631.963 34.5156 616.191 39.4473 605.254 49.3105C594.414 59.1738 588.994 71.8203 588.994 87.25C588.994 102.582 593.584 115.229 602.764 125.189C611.943 135.053 625.127 139.984 642.314 139.984ZM642.314 161.078H658.428C665.947 161.078 671.367 163.031 674.688 166.938C678.008 170.844 679.668 175.922 679.668 182.172C679.668 196.234 669.17 203.266 648.174 203.266C628.35 203.266 613.457 200.336 603.496 194.477L611.992 188.031C618.828 191.156 630.889 192.719 648.174 192.719C656.572 192.719 662.188 191.791 665.02 189.936C667.949 188.08 669.414 185.492 669.414 182.172C669.414 178.949 668.584 176.41 666.924 174.555C665.361 172.602 662.432 171.625 658.135 171.625H642.314C628.838 171.625 616.631 169.428 605.693 165.033C594.854 160.639 585.918 154.584 578.887 146.869C571.953 139.154 566.631 130.219 562.92 120.062C559.209 109.906 557.354 98.9688 557.354 87.25C557.354 77.875 558.672 68.9883 561.309 60.5898C563.945 52.1914 567.9 44.4766 573.174 37.4453C578.545 30.4141 584.941 24.3594 592.363 19.2812C599.883 14.1055 608.77 10.1016 619.023 7.26953C629.375 4.33984 640.557 2.875 652.568 2.875C671.416 2.875 689.043 5.75586 705.449 11.5176C721.855 17.1816 735.527 25.1406 746.465 35.3945L737.969 41.6934C728.008 32.709 715.557 25.7754 700.615 20.8926C685.674 15.9121 669.658 13.4219 652.568 13.4219C639.189 13.4219 627.08 15.375 616.24 19.2812C605.498 23.0898 596.611 28.3633 589.58 35.1016C582.646 41.8398 577.275 49.6523 573.467 58.5391C569.756 67.4258 567.9 76.9961 567.9 87.25C567.9 101.02 570.684 113.422 576.25 124.457C581.816 135.492 590.312 144.379 601.738 151.117C613.164 157.758 626.689 161.078 642.314 161.078Z" stroke="white" stroke-width="5" />
                        <path d="M385.82 184.809L390.068 174.262H426.104L430.352 184.809H385.82ZM377.617 205.902L381.719 195.355H434.307L438.848 205.902H377.617ZM369.414 226.996L373.516 216.449H442.656L447.051 226.996H369.414ZM283.721 256H272.295L368.242 13.4219H379.668L475.469 256H464.189L373.955 27.6309L283.721 256ZM375.273 52.6797L381.279 66.1562L306.279 256H295L375.273 52.6797ZM386.992 80.5117L392.559 95.0137L329.131 256H317.705L386.992 80.5117ZM398.125 109.516L403.691 124.311L351.689 256H340.41L398.125 109.516ZM543.584 256H532.158L436.357 13.4219H447.637L543.584 256ZM424.932 13.4219L520.879 256H509.6L413.652 13.4219H424.932ZM402.227 13.4219L498.174 256H486.748L390.947 13.4219H402.227Z" stroke="white" stroke-width="5" />
                        <path d="M202.422 129.291H212.969V256H202.422V129.291ZM244.609 129.291H255.156V256H244.609V129.291ZM223.516 129.291H234.062V256H223.516V129.291ZM191.875 129.291V256C173.32 263.031 154.082 266.547 134.16 266.547C116.875 266.547 100.322 263.373 84.502 257.025C68.6816 250.678 54.7656 241.889 42.7539 230.658C30.7422 219.33 21.123 205.365 13.8965 188.764C6.76758 172.064 3.20312 154.047 3.20312 134.711C3.20312 116.84 6.66992 99.7988 13.6035 83.5879C20.6348 67.2793 30.0098 53.2656 41.7285 41.5469C53.5449 29.7305 67.5586 20.3555 83.7695 13.4219C100.078 6.39062 117.168 2.875 135.039 2.875C157.305 2.875 178.008 8.05078 197.148 18.4023C216.289 28.7539 231.914 42.8164 244.023 60.5898L235.234 66.3027C224.102 49.9941 209.697 37.1035 192.021 27.6309C174.443 18.1582 155.449 13.4219 135.039 13.4219C118.633 13.4219 102.91 16.6445 87.8711 23.0898C72.9297 29.4375 60.0391 38.0312 49.1992 48.8711C38.3594 59.7109 29.7168 72.6504 23.2715 87.6895C16.9238 102.631 13.75 118.305 13.75 134.711C13.75 152.387 17.0215 168.891 23.5645 184.223C30.2051 199.555 38.9941 212.396 49.9316 222.748C60.9668 233.1 73.7598 241.254 88.3105 247.211C102.861 253.07 117.998 256 133.721 256C150.225 256 166.094 253.412 181.328 248.236V238.129C166.777 243.012 151.494 245.453 135.479 245.453C123.857 245.453 112.529 243.842 101.494 240.619C90.5566 237.299 80.4004 232.465 71.0254 226.117C61.748 219.672 53.5938 212.055 46.5625 203.266C39.6289 194.379 34.1602 184.076 30.1562 172.357C26.25 160.541 24.2969 147.992 24.2969 134.711C24.2969 114.691 29.2285 96.1855 39.0918 79.1934C49.0527 62.2012 62.5293 48.7734 79.5215 38.9102C96.5137 28.9492 115.02 23.9688 135.039 23.9688C153.789 23.9688 171.221 28.3633 187.334 37.1523C203.447 45.8438 216.582 57.6602 226.738 72.6016L217.949 78.3145C208.77 64.8379 196.855 54.1934 182.207 46.3809C167.656 38.4707 151.934 34.5156 135.039 34.5156C121.465 34.5156 108.477 37.1523 96.0742 42.4258C83.6719 47.6992 72.9785 54.8281 63.9941 63.8125C55.1074 72.6992 48.0273 83.3438 42.7539 95.7461C37.4805 108.148 34.8438 121.137 34.8438 134.711C34.8438 146.918 36.6016 158.393 40.1172 169.135C43.7305 179.779 48.6621 189.105 54.9121 197.113C61.2598 205.023 68.6328 211.859 77.0312 217.621C85.4297 223.285 94.5605 227.582 104.424 230.512C114.385 233.441 124.59 234.906 135.039 234.906C151.25 234.906 166.68 232.172 181.328 226.703V216.156C166.875 221.723 151.787 224.506 136.064 224.506C124.15 224.506 112.773 222.504 101.934 218.5C91.0938 214.398 81.4258 208.637 72.9297 201.215C64.5312 193.793 57.8418 184.32 52.8613 172.797C47.8809 161.273 45.3906 148.578 45.3906 134.711C45.3906 118.5 49.3945 103.51 57.4023 89.7402C65.4102 75.9707 76.2988 65.082 90.0684 57.0742C103.838 49.0664 118.828 45.0625 135.039 45.0625C150.176 45.0625 164.238 48.5781 177.227 55.6094C190.312 62.6406 200.957 72.2109 209.16 84.3203L200.371 90.0332C193.145 79.4863 183.77 71.1367 172.246 64.9844C160.82 58.7344 148.418 55.6094 135.039 55.6094C120.684 55.6094 107.451 59.1738 95.3418 66.3027C83.2324 73.334 73.6133 82.9043 66.4844 95.0137C59.4531 107.123 55.9375 120.355 55.9375 134.711C55.9375 144.672 57.3535 153.949 60.1855 162.543C63.0176 171.137 66.9238 178.559 71.9043 184.809C76.8848 191.059 82.6953 196.381 89.3359 200.775C96.0742 205.17 103.301 208.49 111.016 210.736C118.73 212.885 126.738 213.959 135.039 213.959C151.543 213.959 166.973 210.688 181.328 204.145V194.037C167.461 200.189 152.471 203.266 136.357 203.266C127.08 203.266 118.34 201.85 110.137 199.018C101.934 196.186 94.5117 192.035 87.8711 186.566C81.3281 181.098 76.1035 173.92 72.1973 165.033C68.3887 156.049 66.4844 145.941 66.4844 134.711C66.4844 125.434 68.291 116.596 71.9043 108.197C75.5176 99.7012 80.4004 92.377 86.5527 86.2246C92.7051 80.0723 99.9805 75.1895 108.379 71.5762C116.875 67.9629 125.762 66.1562 135.039 66.1562C146.66 66.1562 157.451 68.8906 167.412 74.3594C177.373 79.7305 185.479 87.0547 191.729 96.332L183.086 102.045C177.812 94.2324 170.928 88.0801 162.432 83.5879C154.033 78.998 144.902 76.7031 135.039 76.7031C119.023 76.7031 105.352 82.3672 94.0234 93.6953C82.6953 105.023 77.0312 118.695 77.0312 134.711C77.0312 144.574 78.6426 153.314 81.8652 160.932C85.0879 168.451 89.4824 174.506 95.0488 179.096C100.713 183.588 106.963 187.006 113.799 189.35C120.732 191.596 128.154 192.719 136.064 192.719C152.275 192.719 167.363 189.35 181.328 182.611V129.291H191.875Z" stroke="white" stroke-width="5" />
                    </svg>

                </div>
                <div className="home-grid">
                    <div className='G'>
                        <h3>Gather</h3>
                        <p>The process of collecting or bringing together information, experiences, or moments from various sources, often to share or display later.</p>
                    </div>
                    <div className='A'>
                        <h3>Amplify</h3>
                        <p>To increase the reach, visibility, or impact of a message, post, or content by making it more prominent and accessible to a wider audience.</p>
                    </div>
                    <div className='S1'>
                        <h3>Share</h3>
                        <p>Distributing content, ideas, or experiences to others, in order to encourage engagement, connection, and interaction.</p>
                    </div>
                    <div className='S2'>
                        <h3>Socialize</h3>
                        <p>Actively engaging with others to build relationships and foster community and connections, both online and offline spaces</p>
                    </div>
                </div>
                <div className="home-sec3">
                    <div className="part-1">
                        <h1 className='gass-head'>Introducing, <span className='hg-head'>GASS</span></h1>
                        <p><span className='gass-abbrev'>Gather</span> ideas, <span className='gass-abbrev'>Amplify</span> voices, and <span className='gass-abbrev'>Share</span> your story—where every moment finds its place, and <span className='gass-abbrev'>socializing</span> becomes a vibrant connection. Welcome to a community built for you.</p>
                        <button>Get Started Now</button>
                    </div>
                    <div className="part-2">
                        <PhoneAnimation />
                    </div>
                </div>

                <div className="home-sec4">
                    <div className="p4-left">
                        <h1>Features we provide</h1>
                    </div>

                    <div className="p4-right">
                        <div className="p4-scroll c-one">
                            <h1>Simple and Smooth Ui</h1>
                            <p>Gass features a simple and smooth user interface designed for easy navigation, allowing users to effortlessly connect and interact. Its intuitive layout enhances the overall user experience, making it accessible to all.</p>
                        </div>
                        <div className="p4-scroll c-two">
                            <h1>Open Source</h1>
                            <p>Gass is built as an open-source platform, encouraging community collaboration and contributions. This transparency allows developers to improve the platform continuously, ensuring that it evolves to meet user needs and preferences.</p>
                        </div>
                        <div className="p4-scroll c-three">
                            <h1>Security and Privacy</h1>
                            <p>Gass prioritizes user security and privacy, implementing robust measures to protect personal information. With end-to-end encryption and user control over privacy settings, users can engage confidently, knowing their data is secure.</p>
                        </div>
                    </div>
                </div>
                <div className="home-sec5">
                    <div className="sec5-part-1">
                            <SignUpAnimation />
                    </div>
                    <div className="sec5-part-2">
                        <h1 className='gass-head'>How we Socialize at <span className='hg-head'>GASS</span></h1>
                        <p>Gass connects users with similar interests, promoting networking and collaboration. It helps maintain friendships, discover new opportunities, and expand social circles. With its inclusive and user-friendly design, Gass ensures everyone can participate, regardless of technical skills.</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="home-sec6"></div>
            </div>
        </>
    )
}

export default Home
