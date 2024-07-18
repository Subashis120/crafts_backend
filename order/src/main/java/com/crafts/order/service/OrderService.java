package com.crafts.order.service;

import com.crafts.order.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> getOrder();

    Order saveOrder(Order order);
}
