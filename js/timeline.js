// ====== Timeline.js Initialization for American Firearms Evolution ======

document.addEventListener('DOMContentLoaded', function() {
    console.log('Timeline page DOM loaded');
    
    // Check if Timeline.js loaded properly
    if (typeof TL === 'undefined') {
        console.error('Timeline.js library failed to load');
        document.getElementById('timeline-fallback').classList.add('show');
        return;
    }
    
    console.log('Timeline.js library loaded successfully');
    
    // Timeline Data Structure for American Firearms Evolution
    const timelineData = {
        "title": {
            "media": {
                "url": "",
                "caption": "",
                "credit": ""
            },
            "text": {
                "headline": "American Firearms Evolution",
                "text": "<p>Building systematically, era by era, using Timeline.js for hierarchical organization</p>"
            }
        },
        
        "events": [
            // ===== I. SMOOTHBORE ERA (1720s–1830s) =====
            {
                "unique_id": "smoothbore-era",
                "start_date": {"year": "1720"},
                "end_date": {"year": "1820"}, // Meets Rifling era seamlessly
                "type": "title",
                "group": "Eras", // ROW 1: ERAS
                
                "media": {
                    "url": "media/Smoothbore_ERA.jpg",
                    "caption": "The Delaware Regiment at the Battle of Long Island - soldiers firing smoothbore muskets " +
                              "in formation, illustrating the line tactics of the Smoothbore Era."
                },
                
                "text": {
                 "headline": "I. SMOOTHBORE ERA (1720–1830)",
                 "text": "<p>Smoothbore muskets fired round lead balls with no spin, limiting accuracy to 50–75 yards. " +
                            "Soldiers fired 2–3 shots per minute using flintlock ignition, which was unreliable in wet conditions. " +
                            "Due to slow reloading and short range, armies used massed firing lines and bayonet charges. " +
                            "This is illustrated in <em>The Delaware Regiment at the Battle of Long Island</em>, which shows troops firing in formation.</p>" +

                            "<p>This era shaped American tactics by forcing line formations and close engagements. " +
                            "While not superior to British arms, early American use of lighter French muskets offered slight handling advantages. " +
                            "These weapons affected U.S. victories through reliability at close range—at battles like Saratoga and Yorktown, " +
                            "fire discipline and defensive positions mattered more than precision or volume of fire.</p>"
                }
            },
            {
                "start_date": {"year": "1722"},
                "end_date": {"year": "1812"},
                "group": "Weapons",
                
                "media": {
                  "url": "https://commons.wikimedia.org/wiki/File:Richard_Wilson_Brown_Bess_Musket_1761-NMAH-ET2015-11397.jpg",
                  "caption": "Standard-issue Brown Bess smoothbore musket, used by British troops and early American militia. This example is dated 1761 and is held by the Smithsonian Institution."
                },
                
                "text": {
    "headline": "Brown Bess Musket (1722–1812)",
    "text": "<p>The Brown Bess was a .75 caliber smoothbore flintlock musket used extensively by British infantry and adopted by colonial militias during the 18th and early 19th centuries. It fired a spherical lead ball, typically .69 to .71 inches in diameter, to allow for faster reloading, at the cost of consistent ballistic performance. The absence of rifling meant the ball did not spin, resulting in significant inaccuracy—particularly beyond 75 yards. (National Museum of American History, Smithsonian Institution)</p>" +
            "<p>In combat, a trained soldier could fire approximately 3 to 4 rounds per minute during drills, though actual battlefield conditions often reduced the effective rate to 2 shots per minute. Flintlock ignition was vulnerable to environmental conditions; rain, humidity, or fouling could prevent the powder from igniting. Misfires were common, especially in prolonged engagements. (Knight, Ian. \"Old Steady Shots: The Martini-Henry Rifle, Rates of Fire and Effectiveness,\" Anglo-Zulu War Historical Society, 2006)</p>" +
            "<p>The musket’s short range and slow rate of fire shaped 18th-century tactics. Armies relied on linear formations and synchronized volley fire to compensate for individual inaccuracy. These formations often culminated in bayonet charges once units had closed the distance. The Brown Bess was a decisive weapon not because of technical superiority, but because it enabled disciplined formations and close-range engagements that defined the smoothbore era. (Knight, Ian. \"Old Steady Shots,\" 2006)</p>"
  }
              },
            
              {
                "start_date": {"year": "1740"},
                "end_date": {"year": "1800"},
                "group": "Weapons",
                
                                "media": {
                    "url": "media/American_Rifle - Trim.mp4",
                    "caption": "Demonstration and historical context of the American Long Rifle, showcasing its accuracy and tactical advantages over smoothbore muskets."
                },
                
                "text": {
                  "headline": "American Long Rifle (Pennsylvania/Kentucky Rifle)",
                  "text": "<p>The American Long Rifle was a .50 to .60 caliber muzzle-loading rifle with rifled barrels that imparted spin to the bullet, increasing accuracy and effective range beyond 200 yards—over twice that of smoothbore muskets. According to Henry Kauffman's research, the Pennsylvania Long Rifle could shoot five times farther than comparable muskets of the day, with an effective range of approximately 300 yards (Kauffman, Henry. The Pennsylvania-Kentucky Rifle. Morgantown, PA: Masthof Press, 2005).</p>" +
                          
                          "<p>Its slower reload time—often 30 seconds or more per shot—limited widespread issuance, but it excelled in the hands of skilled marksmen. It was favored for ambushes, skirmishing, and sniping British officers and artillery crews, disrupting command and morale.</p>" +
                          
                          "<p>Used effectively at Saratoga, Cowpens, and King's Mountain, the rifle allowed colonial forces to exploit terrain and extend engagement distance beyond that of British muskets, contributing significantly to American tactical successes. The devastating effects were most visible during major military battles, where American colonists hid among trees with excellent cover to attack British forces (Nardo, Don. The Battle of Saratoga. Minneapolis, MN: Compass Point Books, 1947).</p>"
                }
              },
            
              {
                "start_date": {"year": "1795"},
                "end_date": {"year": "1812"},
                "group": "Weapons",
              
                "media": {
                  "url": "https://ussconstitutionmuseum.org/wp-content/uploads/2018/09/875-1ab_008.jpg",
                  "caption": "The Springfield Model 1795 was the first standardized U.S. military musket, manufactured at federal armories using interchangeable parts."
                },
              
                "text": {
                  "headline": "Springfield and Harpers Ferry Model 1795",
                  "text": "<p>The Springfield Model 1795 was a .69 caliber smoothbore flintlock musket copied from the French Charleville Model 1763. The Model 1795 was patterned after the French Charleville musket and was the first U.S. martial arm to be produced at Springfield Armory, with approximately 80,000 manufactured before production was discontinued in 1814 (National Firearms Museum, NRA. \"U.S. Springfield Model 1795 Flintlock Musket Type I\").</p>" +
              
                          "<p>This was the first standardized U.S. military firearm produced at both Springfield and Harpers Ferry armories. The Model 1795 muskets were the first standardized U.S. martial arms and represented a significant step toward domestic weapons production independence (Lee, Andrew S. \"The U.S. Armory at Harpers Ferry, Historic Resource Study.\" National Park Service, 2006).</p>" +
              
                          "<p>Its performance was similar to the Brown Bess. It had a short effective range and slow reload speed. Its advantage came from mass production, which allowed the U.S. to supply its military without foreign imports.</p>"
                }
              },
            
            {
                "unique_id": "revolutionary-war",
                "start_date": {"year": "1775"},
                "end_date": {"year": "1783"},
                "group": "Conflicts",
              
                                "media": {
                    "url": "media/BattleofBunkerHill.CreditDonTroiani..avif",
                    "caption": "Battle of Bunker Hill. Credit: Don Troiani. This painting depicts Revolutionary War combat involving line infantry with smoothbore muskets, illustrating the tactical formations of the period."
                },
              
                "text": {
                  "headline": "Revolutionary War (1775–1783)",
                  "text": "<p>The Revolutionary War highlighted the contrast between smoothbore volley fire and long-range rifle marksmanship. British and American regulars relied on .75 caliber smoothbore muskets like the Brown Bess, effective at 80–100 yards and suited to linear tactics. In contrast, American long rifles had rifled barrels, exceeded 200 yards in effective range, and enabled accurate fire from cover and elevation (Wright, John W. \"The Rifle in the American Revolution.\" American Historical Review, Jan. 1924, vol. 29, no. 2, pp. 293-299).</p>" +
              
                          "<p>American forces used long rifles to target officers, delay advances, and disrupt artillery, while musket-equipped militia and Continentals held defensive lines. This integration of skirmishers with conventional troops created a tactical advantage despite limited manpower and supplies. The use of terrain, decentralized engagement, and rifle superiority helped offset British discipline and training.</p>"
                }
              },
            
              {
                "unique_id": "war-of-1812",
                "start_date": {"year": "1812"},
                "end_date": {"year": "1815"},
                "group": "Conflicts",
              
                                "media": {
                    "url": "media/42-24017617-1.webp",
                    "caption": "A lithograph of the Battle of New Orleans, circa 1890. © Corbis. This depicts American forces using domestically produced muskets and artillery during the War of 1812."
                },
              
                "text": {
                  "headline": "War of 1812 – Testing U.S. Weapons",
                  "text": "<p>The War of 1812 tested whether the United States could fight using its own weapons. It was the first war fought mainly with U.S.-made muskets, rifles, and artillery.</p>" +
              
                          "<p>The Springfield Model 1795 was the main infantry musket. It had a short range but could be produced in large numbers. These domestically-produced muskets enabled the United States to arm its forces without dependence on foreign suppliers during the conflict.</p>" +
              
                          "<p>American light infantry used the Model 1803 rifle. It had better accuracy than muskets but took longer to reload. The rifle's superior range and accuracy made it effective for skirmishing and precision shooting in frontier warfare.</p>" +
              
                          "<p>American ships used heavy cannon made in the U.S. The USS Constitution carried 44 guns and defeated British ships in several battles. The victory over HMS Guerriere on August 19, 1812, demonstrated the effectiveness of American naval gunnery, as Dr. Amos Evans recorded: 'From the firing of the first gun to the close of the action was one hour & ten minutes. The Guerriere had 15 killd and 62 wounded' (USS Constitution Museum. \"The Battle.\" August 14, 2012).</p>" +
              
                          "<p>This war showed that the U.S. could produce enough weapons to supply its army and navy. It marked a shift from dependence on Europe to self-reliance in arms manufacturing.</p>"
                }
              },
            
            // ===== II. RIFLING & PERCUSSION REVOLUTION (1820s–1850s) =====
            {
                "unique_id": "rifling-revolution",
                "start_date": {"year": "1820"},
                "end_date": {"year": "1847"},
                "type": "title",
                "group": "Eras",
              
                                "media": {
                    "url": "media/M1855 Tape.jpg",
                    "caption": "Here is an M1855 with a Maynard Tape in place. This system was intended to provide faster, more reliable ignition than traditional percussion caps."
                },
              
                "text": {
                  "headline": "II. RIFLING & PERCUSSION REVOLUTION (1820s–1850s)",
                  "text": "<p>American muskets began to use rifled barrels. This made bullets spin, improving accuracy and range. The Springfield Model 1842 was smoothbore. The later Model 1855 added rifling and the Minié ball.</p>" +
              
                          "<p>The Minié ball was a conical bullet that expanded when fired. It allowed faster loading and better performance. Rifled muskets could hit targets at 300–400 yards. Smoothbores were only reliable under 100 yards.</p>" +
              
                          "<p>Flintlocks were also replaced. Percussion caps gave more reliable ignition. The Model 1855 even tested the Maynard tape primer system. These systems worked better in rain and damp conditions.</p>" +
              
                          "<p>Because of these changes, tactics started to shift. Soldiers used cover, fought at longer range, and dug trenches. In the Mexican-American War, U.S. riflemen often outperformed larger Mexican units using old flintlocks.</p>"
                }
              },
            
              {
                "start_date": {"year": "1840"},
                "end_date": {"year": "1860"},
                "group": "Weapons",
              
                                "media": {
                    "url": "media/Springfield_1855.jpg",
                    "caption": "The Springfield Model 1855 shows the shift from flintlock to percussion ignition, improving firing speed and weather reliability."
                },
              
                "text": {
                  "headline": "Springfield Model 1855 – Percussion Ignition Replaces Flintlocks",
                  "text": "<p>The Springfield Model 1855 was a .58 caliber rifled musket that replaced flintlock systems with percussion caps. It briefly used the Maynard tape primer but reverted to standard caps due to reliability issues.</p>" +
              
                          "<p>Percussion caps offered faster, more dependable ignition and worked well in rain or humidity. Soldiers experienced fewer misfires and required less time to ready each shot. The percussion ignition system was invented by Rev. Alexander Forsyth in 1807, but did not gain widespread military adoption until the 1830s-1840s due to initial reliability issues (Bailey, De Witt. \"Who Invented the Percussion Cap?\" Man at Arms 25, no. 4 (2003): 41-45).</p>" +
              
                          "<p>The development of percussion primers significantly improved ignition reliability compared to flintlocks, particularly in adverse weather conditions. Military historians note that percussion systems became standard throughout the U.S. Army by the 1850s (Gooding, S. James. \"The Development of Percussion Primers.\" The Canadian Journal of Arms Collecting 12, no. 4 (1974): 283-297).</p>" +
              
                          "<p>The Model 1855 marked the Army's full transition to percussion ignition, setting the baseline for all future U.S. infantry rifles through the 1860s.</p>"
                }
              },
            
            {
                "start_date": {"year": "1836"},
                "end_date": {"year": "1847"},
                "group": "Weapons",
              
                                "media": {
                    "url": "media/Hall_Rifle.jpg",
                    "caption": "The Hall Rifle featured a revolutionary breech-loading mechanism with a pivoting chamber, allowing soldiers to reload faster than traditional muzzle-loaders."
                },
              
                "text": {
                  "headline": "Hall Rifle (Model 1819 and variants)",
                  "text": "<p>The Hall Rifle was a .52 caliber flintlock with a breech-loading system. The shooter dropped the bullet and powder into a pivoting chamber. This made reloading faster than muzzle-loaders.</p>" +
              
                          "<p>It was the first U.S. military rifle mass-produced with interchangeable parts. It was issued to dragoons and riflemen from the 1830s to the Mexican-American War. Soldiers could reload while kneeling or behind cover.</p>" +
              
                          "<p>The Hall rifle's breech-loading mechanism provided tactical advantages in reloading speed compared to conventional muzzle-loaders. Contemporary military reports noted its effectiveness for mounted troops who needed to reload while on horseback (Pitman, John. The Pitman Notes on U.S. Martial Small Arms and Ammunition, 1776-1933: Volume 5. Thomas Publications, 1992).</p>" +
              
                          "<p>The breech seal sometimes leaked gases, but the rifle showed the future of firearm design. John Hall’s factory at Harpers Ferry helped spread the idea of machine-made, identical parts in weapon manufacturing.</p>"
                }
              },
            
              {
                "start_date": {"year": "1841"},
                "group": "Weapons",
              
                                "media": {
                    "url": "media/missisipi_rifle.avif",
                    "caption": "Cased ambrotype portrait of C.S.A. Corporal Anthony Sydnor Barksdale (1841-1923), taken 1861 with Mississippi rifle. Confederate Memorial Literary Society Manuscript Collections"
                },
              
                "text": {
                  "headline": "Model 1841 \"Mississippi\" Rifle",
                  "text": "<p>The Model 1841 was the first rifled weapon widely adopted by the U.S. Army. It fired a .54 caliber ball and used percussion ignition.</p>" +
              
                          "<p>Its rifled barrel gave much higher accuracy and range than earlier smoothbores. Soldiers reported reliable accuracy at over 300 yards.</p>" +
              
                          "<p>Contemporary military evaluations praised the Model 1841's accuracy and range compared to earlier smoothbore muskets. The rifle's .54 caliber design and rifled barrel made it particularly effective for skirmishing and precise engagement of enemy positions (Thomas, Dean S. Round Ball to Rimfire: A History of Civil War Small Arms Ammunition. Thomas Publications, 2003).</p>" +
              
                          "<p>The Model 1841 set the design standard for later rifles, including the Model 1855.</p>"
                }
              },
            
              {
                "unique_id": "mexican-american-war",
                "start_date": {"year": "1846"},
                "end_date": {"year": "1848"},
                "group": "Conflicts",
              
                 "media": {
                 "url": "media/Mexican_American_war.jpg",
                 "caption": "Major General Gideon Pillow's division attacks the Mexican strongpoint at Chapultepec during Major General Winfield Scott's final drive on Mexico City, 13 September 1847, as depicted in James Walker's 1848 oil on board, Pillow's Attack Advancing Through the Woods of Chapultepec. (Army Art Collection)"
                },
              
                
                "text": {
                "headline": "Mexican-American War (1846–1848)",
                "text": "<p><strong>Evidence:</strong> Rifled muskets such as the Model 1841 'Mississippi' had effective ranges that vastly exceeded smoothbore muskets. The Model 1841 was the first rifled weapon widely adopted by the U.S. Army, firing a .54 caliber ball with percussion ignition, providing much higher accuracy and range than earlier smoothbores (Thomas, Dean S. Round Ball to Rimfire: A History of Civil War Small Arms Ammunition. Thomas Publications, 2003).</p>" +

                "<p>During the Mexican-American War, American riflemen used this extended range advantage to engage Mexican defensive positions at distances that rendered enemy return fire ineffective. The rifle's superior accuracy at ranges of 200-300 yards disrupted Mexican formations and artillery positions.</p>" +

                "<p>The tactical advantage of rifled weapons allowed U.S. forces to suppress key defensive positions from extended ranges, facilitating artillery deployment and infantry assaults with reduced casualties. This technological superiority gave American forces a significant edge in engagements throughout the conflict.</p>"
                }
              },
            // ===== III. REPEATING WEAPONS ERA (1850s–1865) =====
            {
                "unique_id": "repeating-era",
                "start_date": {"year": "1847"},
                "end_date": {"year": "1869"},
                "type": "title",
                "group": "Eras",
              
                                "media": {
                    "url": "media/repeaters.webp",
                    "caption": "Civil War Skirmish 1863: The 1st Maine Cavalry firing Spencer rifles during the Battle of Middleburg in Virginia. Drawing by Alfred R. Waud, June 1863."
                },
              
                "text": {
                "headline": "III. REPEATING WEAPONS ERA (1850s–1865)",
                "text": "<p>The Henry and Spencer rifles used self‑contained metallic cartridges and internal magazines. These weapons could fire 7 to 16 rounds before reloading.</p>" +
                        
                        "<p>Lever‑action systems made them easier to operate. They replaced paper cartridges and removed the need for ramrods. During the Civil War, experienced Spencer rifle operators could achieve sustained rates of 14-20 rounds per minute in combat, while Henry rifles could achieve even higher peak rates of approximately 28 rounds per minute (Bresnan, Andrew L. \"The Henry Repeating Rifle.\" RareWinchesters.com).</p>" +
                        
                        "<p>Repeaters enabled rapid, sustained fire by individual soldiers. This changed tactics by reducing reliance on massed formations. Small units could deliver continuous fire to repel attacks and control terrain.</p>" +
                        
                        "<p>Repeaters acted as force multipliers, improving the effectiveness and flexibility of infantry and cavalry units.</p>"
                }
            },
            
              {
                "start_date": {"year": "1847"},
                "group": "Weapons",
              
                                "media": {
                    "url": "media/colt_walker.jpg",
                    "caption": "Clint Eastwood in a scene from The Outlaw Josey Wales, holding a Colt Walker 1847 revolver in each hand."
                },
              
                "text": {
                "headline": "Colt Walker Revolver Deployment",
                "text": "<p>The Colt Walker revolver was developed in 1847 through collaboration between Samuel Colt and Texas Ranger Captain Samuel Hamilton Walker. It was designed specifically for the Mexican-American War and became the largest and most powerful cap-and-ball revolver ever produced (Barol, Bill. \"The Army Colt.\" American Heritage, March 1990).</p>" +

                        "<p>Weighing 4 pounds 9 ounces with a 9-inch barrel, the Walker fired .44 caliber rounds and held six shots. Its 60-grain powder charge made it significantly more powerful than earlier revolvers, with an effective range exceeding 100 yards (Barol, Bill. \"The Army Colt.\" American Heritage, March 1990).</p>" +

                        "<p>The Walker demonstrated the potential of repeating handguns in military service, leading to the development of lighter, more practical revolvers like the Colt 1860 Army model that would dominate Civil War battlefields (Barol, Bill. \"The Army Colt.\" American Heritage, March 1990).</p>"
                    }
            },
            
            {
                "start_date": {"year": "1860"},
                "end_date": {"year": "1865"},
                "group": "Weapons",
                                "media": {
                    "url": "media/Henry Rifle speed round!.mp4",
                    "caption": "Demonstration of the Henry rifle's rapid firing capability. Credit: Dreamwalker Films. This video showcases the fast fire rate that made repeating rifles so effective in Civil War combat."
                },
                "text": {
                "headline": "Henry Repeating Rifle",
                "text": "<p>The Henry repeating rifle, designed by Benjamin Tyler Henry and patented in 1860, was a sixteen-shot .44 caliber lever-action rifle that used metallic cartridges. It held 15 rounds in a tubular magazine beneath the barrel, allowing continuous fire without individual reloading (Winchester Arms Collectors Association, winchestercollector.org).</p>" +

                        "<p>During Civil War testing, Lieutenant W. Mitchel was able to fire 187 shots in three minutes and thirty-six seconds under supervision at the Washington Navy Yard. The rifle could achieve approximately 28 rounds per minute with an experienced operator, though battlefield conditions typically reduced this rate (Bresnan, Andrew L. \"The Henry Repeating Rifle: Victory thru rapid fire.\" RareWinchesters.com).</p>" +

                        "<p>Confederate forces nicknamed it \"that damned Yankee rifle that can be loaded on Sunday and fired all week,\" reflecting its intimidating firepower advantage. According to firearms historian Herbert G. Houze, one man armed with a Henry rifle was equivalent to 14 or 15 men equipped with single-shot guns (Henry rifle. Wikipedia, citing multiple historical sources).</p>"
                }
            },
            
            {
                "start_date": {"year": "1863"},
                "end_date": {"year": "1865"},
                "group": "Weapons", // ROW 2-4: WEAPONS
                
                "media": {
                    "url": "media/Spencer Repeating Rifle.jpg",
                    "caption": "President Abraham Lincoln test-fires the Spencer seven-shot repeater rifle in August 1863. This colour lithograph demonstrates Lincoln's personal interest in advanced weaponry that would give Union forces tactical advantages. Credit: American School, 19th century / Private Collection / Peter Newark American Pictures / The Bridgeman Art Library."
                },
                
                "text": {
                "headline": "Spencer Repeating Rifle and Carbine",
                "text": "<p>The Spencer repeating rifle, invented by Christopher Spencer, featured a lever-action mechanism with a seven-round magazine in the buttstock. The U.S. government purchased over 105,000 Spencer rifles and carbines during the Civil War, compared to only 1,730 Henry rifles, making it the most widely adopted repeating firearm of the conflict (Coggins, Jack. Arms and Equipment of the Civil War. Barnes & Noble, 1990).</p>" +

                    "<p>The Spencer used .56-56 Spencer rimfire cartridges that provided more reliable ignition than paper cartridges and loose powder. The metallic cartridge system eliminated many of the weather-related misfires that plagued earlier percussion weapons (Coates, Earl J., and Dean S. Thomas. An Introduction to Civil War Small Arms. Thomas Publications, 1990).</p>" +

                    "<p>Its compact design made it particularly suitable for cavalry use, as soldiers could reload while mounted. The Spencer's combination of reliability, rate of fire, and ease of operation gave Union forces a significant advantage in sustained firefights (Barnes, Frank C. Cartridges of the World, 4th edition. DBI Books, 1980).</p>"
            }
            },
            
            {
                "unique_id": "gettysburg-battle",
                "start_date": {"year": "1863"},
                "group": "Conflicts", // ROW 5: CONFLICTS
                
                "media": {
                    "url": "media/Battle_of_Gettysburg_Currier_Ives.png",
                    "caption": "The battle of Gettysburg, Pa. July 3d. 1863, depicting the climactic battle fought July 1–3, 1863. This hand-colored lithograph by Currier and Ives shows the massive scale of Civil War engagements where repeating weapons gave Union forces significant tactical advantages. The battle was a turning point won by the North."
                },
                
                "text": {
                "headline": "Gettysburg: Repeating Weapons Impact",
                "text": "<p>The deployment of repeating weapons at Gettysburg demonstrated their tactical significance in defensive operations. Units equipped with Spencer and Henry rifles could deliver sustained rapid fire that dramatically increased the defensive firepower of individual soldiers, allowing smaller forces to hold positions against larger attacking formations.</p>" +

            "<p>The 21st Ohio Infantry's use of Colt revolving rifles at the Battle of Chickamauga two months later would provide a clear example of repeating weapons' impact. Armed with five-shot Colt rifles, they held a crucial position on Snodgrass Hill against overwhelming Confederate attacks, with one captured Confederate soldier exclaiming, 'My God, we thought you had a division here!' (Kepler, Virginia. \"Battle of Chickamauga: 21st Regiment, Ohio Volunteer Infantry and Their Colt's Revolving Rifles.\" Civil War Times, 1967).</p>" +

            "<p>The tactical evolution toward rapid-fire weapons fundamentally changed Civil War combat, moving away from Napoleonic-era massed formations toward the skirmishing tactics and entrenchment that would characterize later 19th-century warfare. The psychological impact of sustained rapid fire often proved as important as the physical casualties inflicted (Griffith, Paddy. Battle Tactics of the Civil War. Yale University Press, 1989).</p>"
            }
            }
        ]
    };

    // Initialize Timeline.js with error handling
    try {
        console.log('Attempting to initialize timeline...');
        
        const timeline = new TL.Timeline('timeline-embed', timelineData, {
            height: 1050,
            width: '100%',
            debug: true,
            language: 'en'
        });
        
        // Wait for timeline to be ready
        timeline.addEventListener('ready', function() {
            console.log('🎉 Timeline ready event fired');
            console.log('📋 Timeline methods available:', Object.getOwnPropertyNames(timeline));
            console.log('🔍 Timeline navigation methods:');
            console.log('  - goTo:', typeof timeline.goTo);
            console.log('  - goToSlide:', typeof timeline.goToSlide);
            console.log('  - goToId:', typeof timeline.goToId);
            console.log('  - goToNext:', typeof timeline.goToNext);
            console.log('  - goToPrev:', typeof timeline.goToPrev);
            console.log('  - current_slide:', timeline.current_slide);
            console.log('  - current_id:', timeline.current_id);
        });
        
        console.log('Timeline initialized successfully');
        console.log('Timeline methods available:', Object.getOwnPropertyNames(timeline));
        console.log('Timeline goToId method:', typeof timeline.goToId);
        console.log('Timeline goTo method:', typeof timeline.goTo);
        console.log('Timeline methods:', timeline);

        // Navigation Buttons - Handle both era buttons and period buttons
        const periodButtons = document.querySelectorAll('.period-btn');
        
        periodButtons.forEach(button => {
            button.addEventListener('click', function() {
                let targetId = null;
                
                // Check if this is an era button (has data-era attribute)
                if (this.dataset.era) {
                    targetId = this.dataset.era;
                    console.log('Era button clicked for:', targetId);
                }
                // Check if this is a year-based button
                else if (this.dataset.year) {
                    const year = parseInt(this.dataset.year);
                    console.log('Year button clicked for year:', year);
                    
                    // Map years to unique IDs for reliable navigation
                    if (year === 1775) {
                        targetId = "revolutionary-war";  // Revolutionary War event
                    } else if (year === 1812) {
                        targetId = "war-of-1812";     // War of 1812
                    } else if (year === 1846) {
                        targetId = "mexican-american-war";  // Mexican-American War
                    } else if (year === 1861) {
                        targetId = "gettysburg-battle";     // Civil War era
                    }
                }
                
                console.log('Target ID for navigation:', targetId);
                
                // Navigate using Timeline.js goToId method
                if (timeline && targetId) {
                    console.log('🚀 Attempting navigation to ID:', targetId);
                    
                    try {
                        // Timeline.js v3 navigation using unique ID
                        if (typeof timeline.goToId === 'function') {
                            console.log('🎯 Using goToId method with ID:', targetId);
                            timeline.goToId(targetId);
                        }
                        // Fallback: try goTo method with ID
                        else if (typeof timeline.goTo === 'function') {
                            console.log('🎯 Using goTo method with ID:', targetId);
                            timeline.goTo(targetId);
                        }
                        // Fallback: Find by unique_id in events array
                        else {
                            console.log('🔍 Using manual ID search');
                            timelineData.events.forEach((event, index) => {
                                if (event.unique_id === targetId) {
                                    console.log(`✅ Found event with ID "${targetId}" at index ${index}`);
                                    // Try different navigation methods
                                    if (typeof timeline.goToSlide === 'function') {
                                        timeline.goToSlide(index);
                                    } else if (timeline.current_slide !== undefined) {
                                        timeline.current_slide = index;
                                    }
                                }
                            });
                        }
                        
                        console.log('✅ Navigation completed to ID:', targetId);
                        
                    } catch (error) {
                        console.error('❌ Navigation failed:', error);
                        console.log('Available timeline methods:', Object.getOwnPropertyNames(timeline));
                    }
                }
                
                // Smooth scroll to timeline
                document.getElementById('timeline-embed').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Visual feedback - highlight active button
                periodButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Keyboard navigation enhancement
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && timeline) {
                timeline.goToPrev();
            } else if (e.key === 'ArrowRight' && timeline) {
                timeline.goToNext();
            }
        });

        // Make timeline globally available for debugging
        window.debugTimeline = timeline;
        window.debugTimelineData = timelineData;

        // Dynamic Height Controls
        const heightSlider = document.getElementById('height-slider');
        const heightDisplay = document.getElementById('height-display');
        const heightButtons = document.querySelectorAll('.height-btn');
        const timelineContainer = document.getElementById('timeline-embed');

        function updateTimelineHeight(newHeight) {
            // Update container height directly - no timeline reinitialization
            timelineContainer.style.height = newHeight + 'px';
            
            // Update display
            if (heightDisplay) {
                heightDisplay.textContent = newHeight + 'px';
            }
            
            // Let Timeline.js handle the resize automatically with container size change
            // Timeline.js will respond to container size changes on its own
            console.log('Timeline height updated to:', newHeight + 'px');
        }

        // Height slider functionality
        if (heightSlider && heightDisplay) {
            heightSlider.addEventListener('input', function() {
                const newHeight = parseInt(this.value);
                updateTimelineHeight(newHeight);
                
                // Update button states
                heightButtons.forEach(btn => {
                    if (parseInt(btn.dataset.height) === newHeight) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            });
        }

        // Height preset buttons
        heightButtons.forEach(button => {
            button.addEventListener('click', function() {
                const newHeight = parseInt(this.dataset.height);
                heightSlider.value = newHeight;
                updateTimelineHeight(newHeight);
                
                // Update active button
                heightButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Set initial active button (1050px "Default" preset)
        const currentHeight = parseInt(heightSlider.value);
        heightButtons.forEach(btn => {
            if (parseInt(btn.dataset.height) === currentHeight) { // Set "Default" (1050px) as active
                btn.classList.add('active');
            }
        });
        
        // Global test function
        window.testTimelineNavigation = function(targetId) {
            console.log('Testing navigation to ID:', targetId);
            if (window.debugTimeline) {
                if (typeof window.debugTimeline.goToId === 'function') {
                    window.debugTimeline.goToId(targetId);
                } else {
                    console.log('goToId not available, available methods:', Object.keys(window.debugTimeline));
                }
            }
        };
        
        // Helper function to list available timeline events
        window.listTimelineEvents = function() {
            console.log('Available timeline events with IDs:');
            timelineData.events.forEach((event, index) => {
                if (event.unique_id) {
                    console.log(`${index}: ID="${event.unique_id}" - ${event.text.headline}`);
                }
            });
        };

        console.log('🎯 American Firearms Timeline loaded successfully!');
        console.log('📚 Timeline contains', timelineData.events.length, 'historical events');
        console.log('💡 Test navigation with: testTimelineNavigation("era-id") in console');
        console.log('📋 List all events with: listTimelineEvents() in console');
        
    } catch (error) {
        console.error('Timeline initialization failed:', error);
        document.getElementById('timeline-fallback').classList.add('show');
    }
});