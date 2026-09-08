import Product from "./product.js";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const products = [
    new Product(
        "Fernando", 
        10000, 
        "Entrada", 
        loremIpsum, 
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAI_54IHC3KNYtqN448oaTdkdZdht69y0It08AsSaFLeL6ryBPom87tO1x_wUMRbsYcP2usy91D_qsKHGjKBV8DZOZX4wXAa1kEd6vubHK-fdeGJvM9aXNiBxQxH0GZWZaalDA2nsIPikRx_WoSoTLLf5ItnCLL9AX8bbf1LhRKY_9JcI1qP415OTPzy4nWO_oeleMbAZTkk5cHdrGwdY_-2htat5zBwqJRsRMKcQ6duNulKfhznwDu"
    ),
    new Product(
        "Silvestre", 
        10000, 
        "Entrada Vegana", 
        loremIpsum, 
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6PGPNmSuoyTxIYsqwjMbKt1MVzpJIWut4MfynMnbaiZCwAmqqEZpD-Zhs_BvFAHyKumtYK3gMGxQBA2x6driUIa-5xCou5n0B4ZtSjdcnMyVt3sZsoQ4LBCVeX2YB_zAp1539N2ZulSqISv2pyPet7Ah8HfOLHN1BhRgcl2RQccw-KDQk6lLihnHka1TAE2KkpEoshNY45Wf27ojHiRvEoTGDKI3BfynLzMD-HMekjIqqST9AT28"
    ),
    new Product(
        "Oscar", 
        12000, 
        "Entrada", 
        loremIpsum, 
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlRuEeQob8kYjfydnU85W1a9AcjawDYDO3kocXM9Zikg4LoqU8CuAxmEtYLkYv15mu_MI8SPI1Li-bJM2dAaW2bQ6Ra9Ndm6RWbcuQwqciu3__gCnzDROwl4LGWIGgx1Kokn8QCF29wNAL8WTGVkWwvFLk505J_Htbr_B5Kvm2NXp_046er3EQYRv7ZuYrZKfR11562n0SD6FwVQGlspBA5OH-rUcou8S3O6Je7nbf8yrBqCyH2Yqq"
    ),
    new Product(
        "Mariela", 
        12000, 
        "Postre", 
        loremIpsum, 
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEZqMeTahwGjtsXqlq_bwYCZx0vzL4gi3uvXtvQE5YVnUg57_Yvh8CFDn2JJ8EYdZVluqsupZoa8ObBT0YFCpgTPIS-lmRNCHEOpKJKa5dJOVO0NU_kLGDO0ItvanzI_28rmvuxgug-kXLkaVMx7yLOKoTll7qS7VQXoqttIH-nxrGsNyjBc8W4vWW7OvLxOrjz9er0fgXEarf30s9vuyEJsJxxHvN9dBzo1i5jb9Zcqd4_z42aUsN"
    )
];

export default products;
