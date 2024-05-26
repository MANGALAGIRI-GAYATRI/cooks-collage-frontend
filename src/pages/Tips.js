import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const CookingTipsPage = () => {
    const [tips] = useState([
        { _id: 1, title: "Organize Your Space", description: "Keep frequently used items within easy reach. Use clear containers for pantry items to easily identify contents. Label spices and ingredients for quick access." },
        { _id: 2, title: "Use a Magnetic Strip", description: "Install a magnetic strip to hold knives and metal utensils, saving drawer space and keeping them easily accessible." },
        { _id: 3, title: "Sharp Knives Are Safe Knives", description: "Regularly sharpen your knives to make chopping easier and safer. Dull knives require more force and can slip, causing accidents." },
        { _id: 4, title: "Use Silicone Baking Mats", description: "Replace parchment paper with reusable silicone baking mats for baking. They are non-stick and environmentally friendly." },
        { _id: 5, title: "Freeze Leftover Herbs", description: "Chop leftover herbs and freeze them in olive oil or water in ice cube trays. This way, you have ready-to-use herbs for cooking." },
        { _id: 6, title: "Read Recipes Thoroughly", description: "Always read the entire recipe before starting to ensure you understand all the steps and have all the necessary ingredients." },
        { _id: 7, title: "Prep Ingredients Before Cooking", description: "Measure and prepare all ingredients before you start cooking. This makes the cooking process smoother and helps avoid mistakes." },
        { _id: 8, title: "Season as You Go", description: "Season your food at each stage of the cooking process to build layers of flavor. Don't wait until the end to add salt or spices." },
        { _id: 9, title: "Use the Right Pan Size", description: "Choose the correct pan size for the job. Overcrowding a pan can lead to uneven cooking and steaming rather than searing." },
        { _id: 10, title: "Let Meat Rest", description: "After cooking meat, let it rest for a few minutes before cutting. This allows the juices to redistribute, resulting in juicier meat." },
        { _id: 11, title: "Save Pasta Water", description: "When cooking pasta, save a cup of the starchy cooking water. It can be added to sauces to help thicken them and make them cling to the pasta better." },
        { _id: 12, title: "Use a Thermometer", description: "Use a meat thermometer to ensure meat is cooked to the proper internal temperature, which helps avoid undercooking or overcooking." },
        { _id: 13, title: "Deglaze the Pan", description: "After sautéing or searing, deglaze the pan with wine, broth, or water to loosen and incorporate the flavorful browned bits stuck to the bottom." },
        { _id: 14, title: "Taste as You Cook", description: "Regularly taste your food as you cook to adjust seasoning and ensure the flavors are balanced." },
        { _id: 15, title: "Keep It Clean", description: "Clean as you go to maintain an organized workspace and make cleanup easier at the end." }
    ]);

    return (
        <Container maxWidth="lg" sx={{ paddingTop: 4}}>
            <Typography 
                variant="h2" 
                gutterBottom 
                align="center" 
                sx={{ 
                    backgroundColor: "lightcyan", 
                    color: "black", 
                    padding: 2, 
                    borderRadius: 1 
                }}
            >
                Cooking Tips
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {tips.map((tip) => (
                    <Grid key={tip._id} item xs={12} sm={6} md={4}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {tip.title}
                                </Typography>
                                <Typography variant="body1">{tip.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CookingTipsPage;
