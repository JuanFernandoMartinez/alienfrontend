import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from './../pages/Starter/SampleLayout';
import Starter from './../pages/Starter/SamplePage';

import SimplexMethod from 'src/views/Modules/LinearProgramming/SimplexMethod';
import BranchAndBound from 'src/views/Modules/LinearProgramming/BranchAndBound';
import CraftMethod from 'src/views/Modules/LinearProgramming/CraftMethod';
import GraphicalMethod from 'src/views/Modules/LinearProgramming/GraphicalMethod';

import MPS from 'src/views/Modules/MasterPlanSchedule/MPS';
import MRP from 'src/views/Modules/MasterPlanSchedule/MRP';

import LPTable from 'src/components/Modules/LinearProgramming/LPTable';
import TestEmit from 'src/views/Modules/LinearProgramming/Test/testEmit';

import ShortestPath from 'src/views/Modules/Networks/ShortestPath';
import MST from 'src/views/Modules/Networks/MST';
import MFP from 'src/views/Modules/Networks/MFP';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',

          components: { default: Starter }
        },
        {
          path: 'craft',
          name: 'craft',
          components: { default: CraftMethod }

        },
        {
          path: 'simplex',
          name: 'simplex',
          components: { default: SimplexMethod }
        },
        {
          path: 'branch',
          name: 'branch',
          components: { default: BranchAndBound }
        },
        {
          path: 'graphical',
          name: 'graphical',
          components: { default: GraphicalMethod }
        },
        {
          path: 'master-production-schedule',
          name: 'mps',
          components: { default: MPS }
        },
        {
          path: 'material-requirements-planning',
          name: 'mrp',
          components: { default: MRP }
        },
        {
          path: 'test',
          name: 'test',
          components: { default: LPTable }
        },
        {
          path: 'testTable',
          name: 'testTable',
          components: { default: TestEmit }
        },
        {
          path: 'shortest-path',
          name: 'shortest path',
          components: { default: ShortestPath }
        },
        {
          path: 'minimum-spanning-tree',
          name: 'mst',
          components: { default: MST }
        },
        {
          path: 'maximum-flow-problem',
          name: 'mfp',
          components: { default: MFP }
        },
      ]
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
