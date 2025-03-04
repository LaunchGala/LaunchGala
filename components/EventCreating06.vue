<script setup lang="ts">
import { ref } from 'vue';
import { Check, Wifi, Tv, Airplay, Sun, Coffee, Monitor, Speaker, Car, Bus, Shield, Network, Crown, Refrigerator, Microwave, ArrowUpDown, Martini, ChefHat, ShowerHead, Book, DoorClosed, Sofa, Code, DollarSign, GraduationCap, MicIcon, UserCircle2, DollarSignIcon , SmilePlus, Briefcase, Trophy, UsersRoundIcon, GitGraphIcon, Utensils, CameraIcon, SquareUser, Globe, Palette, TrendingUp, RocketIcon, BarChart3, PieChart, Cloud, Cpu, Antenna, Bitcoin, Dna, Stethoscope, Server, User, Heart, Pill, Leaf, Battery, Grid, Atom, Laptop, Wrench, Tractor, Wheat, ShoppingCart, Package, Repeat, ShoppingBag, Box, Shirt, Gamepad, Video, Play, Pencil, Radio, Truck, Train, Key, Calendar, Printer, Factory, Hammer, Scale, Clipboard, Copyright, Lock, Users, Megaphone, Share, Watch } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { AudioLinesIcon } from 'lucide-vue-next';
import { Mic } from 'lucide-vue-next';
import { HeartFilledIcon, QuestionMarkCircledIcon, QuestionMarkIcon, ResetIcon, SpeakerLoudIcon } from '@radix-icons/vue';
import { Mic2Icon } from 'lucide-vue-next';
import { TheaterIcon } from 'lucide-vue-next';
import { Tv2 } from 'lucide-vue-next';
import { LightbulbIcon } from 'lucide-vue-next';
import { RockingChairIcon } from 'lucide-vue-next';
import { AirVentIcon } from 'lucide-vue-next';
import { AccessibilityIcon } from 'lucide-vue-next';
import { WifiIcon } from 'lucide-vue-next';
import { DivideIcon } from 'lucide-vue-next';
import { Home } from 'lucide-vue-next';
import { BedIcon } from 'lucide-vue-next';
import { FlagIcon } from 'lucide-vue-next';
import { AlarmSmokeIcon } from 'lucide-vue-next';
import { DoorOpenIcon } from 'lucide-vue-next';
import { GamepadIcon } from 'lucide-vue-next';
import { Fish } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';
import { BookCheck } from 'lucide-vue-next';
import { BanknoteIcon } from 'lucide-vue-next';
import { PillIcon } from 'lucide-vue-next';
import { TestTube2Icon } from 'lucide-vue-next';
import { HeartCrackIcon } from 'lucide-vue-next';
import { FuelIcon } from 'lucide-vue-next';
import { Flower2Icon } from 'lucide-vue-next';
import { WeightIcon } from 'lucide-vue-next';
import { PlaneIcon } from 'lucide-vue-next';
import { HeartHandshake } from 'lucide-vue-next';
import { StoreIcon } from 'lucide-vue-next';
import { PlaneLandingIcon } from 'lucide-vue-next';
import { BaggageClaim } from 'lucide-vue-next';
import { ComputerIcon } from 'lucide-vue-next';
import { TestTubesIcon } from 'lucide-vue-next';
import { Search } from 'lucide-vue-next';
import { HeartHandshakeIcon } from 'lucide-vue-next';
import { PlaneTakeoffIcon } from 'lucide-vue-next';
import { Building2Icon } from 'lucide-vue-next';
import { BuildingIcon } from 'lucide-vue-next';
import { CarTaxiFront } from 'lucide-vue-next';
import { CarIcon } from 'lucide-vue-next';

const props = defineProps(['event']);
console.log(props.event);

function addEventTypes(eventTypes: string) {
  if (props.event?.industries.includes(eventTypes)) {
    props.event.industries = props.event?.industries.filter((item) => item !== eventTypes);
  } else {
    props.event?.industries.push(eventTypes);
  }
  console.log(props.event?.industries);
}

const industry = [
  'Software Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Internet of Things (IoT)', 
  'Augmented Reality (AR)', 'Virtual Reality (VR)', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 
  'Big Data Analytics', 'Quantum Computing', 'Information Technology Services', 'Computer Hardware', 
  'Telecommunications', 'Consumer Electronics', 'Fintech', 'Insurtech', 'Cryptocurrency & NFT', 
  'Wealth Management', 'Crowdfunding', 'Banking', 'Insurance', 'Investment', 'Stock Markets', 
  'Digital Health', 'Telemedicine', 'Biotechnology', 'Medical Devices', 'Healthcare IT', 'Personalized Medicine', 
  'Health and Wellness', 'Hospitals', 'Pharmaceuticals', 'Clinical Laboratories', 'Medical Practices', 
  'Renewable Energy', 'Clean Tech', 'Energy Storage', 'Smart Grids', 'Environmental Services', 
  'Oil and Gas', 'Coal', 'Nuclear Energy', 'Educational Technology (Edtech)', 'E-learning', 'Learning Management Systems (LMS)', 
  'Corporate Training', 'Primary Education', 'Secondary Education', 'Higher Education', 
  'Vocational Training', 'Agricultural Technology (Agtech)', 'Sustainable Agriculture', 'Food Technology', 
  'Precision Farming', 'Crop Production', 'Livestock Farming', 'Agricultural Equipment', 'E-commerce', 
  'Direct-to-Consumer (DTC)', 'Subscription Services', 'Health and Wellness Products', 'Personal Fitness Technology', 
  'Retail', 'Consumer Products', 'Apparel and Footwear', 'Gaming', 'Digital Media', 
  'Streaming', 'Content Creation', 'Television Broadcasting', 'Film Production', 'Radio Broadcasting', 
  'Autonomous Vehicles', 'Electric Vehicles (EV)', 'Ride-sharing', 'Logistics Technology', 'Supply Chain Innovation', 
  'Automotive', 'Aerospace', 'Railways', 'Property Technology (Proptech)', 'Real Estate Crowdfunding', 'Smart Home Technology', 
  'Residential Real Estate', 'Commercial Real Estate', 'Property Management', 'Travel Technology', 'Hotel Management', 
  'Online Travel Agencies', 'Event Planning', 'Hospitality', 'Restaurants', 'Travel Services', 
  '3D Printing', 'Robotics', 'Industrial IoT', 'Supply Chain Management', 'Textile Manufacturing', 'Metalworks', 
  'Chemical Processing', 'Legal Technology (Legal Tech)', 'Regulatory Technology (Regtech)', 'Compliance', 
  'Intellectual Property', 'Law', 'Corporate Law', 'Regulatory Affairs', 
  'Cybersecurity Services', 'Physical Security', 'Personal Safety', 'Home Automation', 
  'Lead Generation', 'Private Investigation', 'Human Resources Technology (HR Tech)', 'Talent Acquisition', 
  'Freelance Marketplaces', 'Remote Work', 'Staffing', 'Payroll Services', 
  'Digital Marketing', 'Customer Relationship Management (CRM)', 'Social Media Management', 
  'Branding and Design', 'Advertising', 'Public Relations', 'Market Research', 
  'Non-profit Management', 'Social Impact', 'Community Service', 'Charitable Organizations', 
  'Community Foundations', 'Social Services', 'Space Technology', 'Drone Technology', 'Wearable Technology', 
  'Urban Technology', 'Aviation', 'Urban Development', 'Other'
];


function getIcon(industry) {
  switch (industry) {
    case 'Software Development':
      return Code;
    case 'Artificial Intelligence (AI)':
      return Monitor;
    case 'Machine Learning (ML)':
      return Monitor;
    case 'Internet of Things (IoT)':
      return Wifi;
    case 'Augmented Reality (AR)':
      return Tv;
    case 'Virtual Reality (VR)':
      return Tv;
    case 'Cybersecurity':
      return Shield;
    case 'Blockchain':
      return Network;
    case 'Cloud Computing':
      return Cloud;
    case 'Big Data Analytics':
      return BarChart3;
    case 'Quantum Computing':
      return Atom;
    case 'Information Technology Services':
      return Server;
    case 'Computer Hardware':
      return Cpu;
    case 'Telecommunications':
      return Antenna;
    case 'Consumer Electronics':
      return Tv;
    case 'Fintech':
      return DollarSign;
    case 'Insurtech':
      return Shield;
    case 'Cryptocurrency & NFT':
      return Bitcoin;
    case 'Wealth Management':
      return Briefcase;
    case 'Crowdfunding':
      return DollarSign;
    case 'Banking':
      return BanknoteIcon;
    case 'Insurance':
      return Shield;
    case 'Investment':
      return TrendingUp;
    case 'Stock Markets':
      return BarChart3;
    case 'Digital Health':
      return Heart;
    case 'Telemedicine':
      return CameraIcon;
    case 'Biotechnology':
      return Dna;
    case 'Medical Devices':
      return Stethoscope;
    case 'Healthcare IT':
      return Server;
    case 'Personalized Medicine':
      return User;
    case 'Health and Wellness':
      return Heart;
    case 'Hospitals':
      return HeartCrackIcon;
    case 'Pharmaceuticals':
      return PillIcon;
    case 'Clinical Laboratories':
      return TestTube2Icon;
    case 'Medical Practices':
      return Stethoscope;
    case 'Renewable Energy':
      return Sun;
    case 'Clean Tech':
      return Leaf;
    case 'Energy Storage':
      return Battery;
    case 'Smart Grids':
      return Grid;
    case 'Environmental Services':
      return Leaf;
    case 'Oil and Gas':
      return FuelIcon;
    case 'Coal':
      return Shield;
    case 'Nuclear Energy':
      return Atom;
    case 'Educational Technology (Edtech)':
      return Book;
    case 'E-learning':
      return Laptop;
    case 'Learning Management Systems (LMS)':
      return Server;
    case 'Corporate Training':
      return Briefcase;
    case 'Primary Education':
      return Book;
    case 'Secondary Education':
      return Book;
    case 'Higher Education':
      return GraduationCap;
    case 'Vocational Training':
      return Wrench;
    case 'Agricultural Technology (Agtech)':
      return Leaf;
    case 'Sustainable Agriculture':
      return Leaf;
    case 'Food Technology':
      return Utensils;
    case 'Precision Farming':
      return Tractor;
    case 'Crop Production':
      return Wheat;
    case 'Livestock Farming':
      return Flower2Icon;
    case 'Agricultural Equipment':
      return Tractor;
    case 'E-commerce':
      return ShoppingCart;
    case 'Direct-to-Consumer (DTC)':
      return Package;
    case 'Subscription Services':
      return Repeat;
    case 'Health and Wellness Products':
      return Heart;
    case 'Personal Fitness Technology':
      return WeightIcon;
    case 'Retail':
      return ShoppingBag;
    case 'Consumer Products':
      return Box;
    case 'Apparel and Footwear':
      return Shirt;
    case 'Gaming':
      return Gamepad;
    case 'Digital Media':
      return CameraIcon;
    case 'Streaming':
      return Play;
    case 'Content Creation':
      return Pencil;
    case 'Television Broadcasting':
      return Tv;
    case 'Film Production':
      return Video;
    case 'Radio Broadcasting':
      return Radio;
    case 'Autonomous Vehicles':
      return CarIcon;
    case 'Electric Vehicles (EV)':
      return Battery;
    case 'Ride-sharing':
      return CarTaxiFront;
    case 'Logistics Technology':
      return Truck;
    case 'Supply Chain Innovation':
      return Box;
    case 'Automotive':
      return Car;
    case 'Aerospace':
      return PlaneIcon;
    case 'Railways':
      return Train;
    case 'Property Technology (Proptech)':
      return Home;
    case 'Real Estate Crowdfunding':
      return HeartHandshake;
    case 'Smart Home Technology':
      return Home;
    case 'Residential Real Estate':
      return Home;
    case 'Commercial Real Estate':
      return StoreIcon;
    case 'Property Management':
      return Key;
    case 'Travel Technology':
      return PlaneLandingIcon;
    case 'Hotel Management':
      return BedIcon;
    case 'Online Travel Agencies':
      return Globe;
    case 'Event Planning':
      return Calendar;
    case 'Hospitality':
      return Coffee;
    case 'Restaurants':
      return Utensils;
    case 'Travel Services':
      return BaggageClaim;
    case '3D Printing':
      return Printer;
    case 'Robotics':
      return ComputerIcon;
    case 'Industrial IoT':
      return Factory;
    case 'Supply Chain Management':
      return Box;
    case 'Textile Manufacturing':
      return Shirt;
    case 'Metalworks':
      return Hammer;
    case 'Chemical Processing':
      return TestTubesIcon;
    case 'Legal Technology (Legal Tech)':
      return Scale;
    case 'Regulatory Technology (Regtech)':
      return Clipboard;
    case 'Compliance':
      return Check;
    case 'Intellectual Property':
      return Copyright;
    case 'Law':
      return Scale;
    case 'Corporate Law':
      return Briefcase;
    case 'Regulatory Affairs':
      return Clipboard;
    case 'Cybersecurity Services':
      return Shield;
    case 'Physical Security':
      return Lock;
    case 'Personal Safety':
      return Shield;
    case 'Home Automation':
      return Home;
    case 'Lead Generation':
      return Shield;
    case 'Private Investigation':
      return Search;
    case 'Human Resources Technology (HR Tech)':
      return Users;
    case 'Talent Acquisition':
      return User;
    case 'Freelance Marketplaces':
      return Briefcase;
    case 'Remote Work':
      return Laptop;
    case 'Staffing':
      return Users;
    case 'Payroll Services':
      return DollarSign;
    case 'Digital Marketing':
      return Megaphone;
    case 'Customer Relationship Management (CRM)':
      return Users;
    case 'Social Media Management':
      return Share;
    case 'Branding and Design':
      return Palette;
    case 'Advertising':
      return Megaphone;
    case 'Public Relations':
      return Megaphone;
    case 'Market Research':
      return BarChart3;
    case 'Non-profit Management':
      return Heart;
    case 'Social Impact':
      return Heart;
    case 'Community Service':
      return HeartHandshakeIcon;
    case 'Charitable Organizations':
      return Heart;
    case 'Community Foundations':
      return Heart;
    case 'Social Services':
      return Heart;
    case 'Space Technology':
      return RocketIcon;
    case 'Drone Technology':
      return PlaneTakeoffIcon;
    case 'Wearable Technology':
      return Watch;
    case 'Urban Technology':
      return Building2Icon;
    case 'Aviation':
      return PlaneIcon;
    case 'Urban Development':
      return BuildingIcon;
    case 'Other':
      return QuestionMarkCircledIcon;
    default:
      return QuestionMarkIcon;
  }
}

</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card class="bg-orange-200 ">
          <CardHeader>
            <CardTitle>What is your event's industries focus: (Select all applicable)</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


              <Tooltip v-for="item in industry" :key="item">
                <TooltipTrigger as-child>
                  <label @click="addEventTypes(item)" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md" 
                    :class="{ 'bg-orange-100': props.event?.industries.includes(item), 'bg-white': !props.event?.industries.includes(item) }">
                    <component :is="getIcon(item)" class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold text-center mb-1">{{ item }}</span>
                  </label>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </CardContent>
          <div class="flex justify-between items-center p-4">
            <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
              <div class="flex items-center">
                <ArrowLeft class="w-4 h-4 mr-2" />
                Back
              </div>
            </Button>
            <Progress :model-value="62" class="text-white" />
            <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
              <div class="flex items-center">
                Next
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  </div>
</template>
